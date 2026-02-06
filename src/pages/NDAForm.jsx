import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from 'sonner';
import { Send, FileText, CheckCircle2, Download, Upload, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

export default function NDAForm() {
  const today = new Date().toISOString().split('T')[0];
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [uploadingEn, setUploadingEn] = useState(false);
  const [uploadingRu, setUploadingRu] = useState(false);
  const [signedFileUrlEn, setSignedFileUrlEn] = useState('');
  const [signedFileUrlRu, setSignedFileUrlRu] = useState('');
  const [ndaId, setNdaId] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState({
    effective_date: today,
    nda_type: 'bilingual',
    company_name_en: '',
    company_name_ru: '',
    country_en: '',
    country_ru: '',
    registration_number: '',
    signatory_name_en: '',
    signatory_name_ru: '',
    signatory_title_en: '',
    address_en: '',
    address_ru: '',
    contact_email: ''
  });

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleFileUpload = async (file, language) => {
    if (!file) return;

    if (!ndaId) {
      toast.error('Please generate NDA first before uploading signed file');
      return;
    }

    const setter = language === 'en' ? setUploadingEn : setUploadingRu;
    const urlSetter = language === 'en' ? setSignedFileUrlEn : setSignedFileUrlRu;

    setter(true);
    try {
      // Создаем FormData для загрузки файла
      const formDataUpload = new FormData();
      formDataUpload.append('file', file);

      // Вызов API для загрузки подписанного NDA
      const response = await fetch(`/nda/${ndaId}/upload-signed`, {
        method: 'POST',
        body: formDataUpload,
      });

      if (!response.ok) {
        throw new Error('Failed to upload signed NDA');
      }

      const result = await response.json();
      urlSetter('uploaded'); // Помечаем, что файл загружен
      toast.success(`Signed NDA (${language === 'en' ? 'English' : 'Bilingual'}) uploaded successfully!`);
    } catch (error) {
      console.error('Error uploading signed NDA:', error);
      toast.error('Failed to upload signed NDA. Please try again.');
    } finally {
      setter(false);
    }
  };

  const generateNDAContent = () => {
    // This would be the template filled with user data
    // For now, returning a simple text representation
    const date = new Date(formData.effective_date).toLocaleDateString('en-GB');
    return `NON-DISCLOSURE AGREEMENT

${date}

This Nondisclosure Agreement (the "Agreement") is entered into by and between PT MITRA INTERNASIONAL TRANSAKSI a company incorporated under the laws of the Republic of Indonesia under registration number 4025112531201916 in the name of Raisa Shahrestani ("Disclosing Party") and

${formData.company_name_en}, a company incorporated under the laws of ${formData.country_en} under registration number ${formData.registration_number} in the name of ${formData.signatory_name_en} ("Receiving Party") collectively referred to as the "Parties" and individually as a "Party".

[Full NDA template content would be here...]

Signatures of the parties

PT MITRA INTERNASIONAL TRANSAKSI
Address: Sahid Sudirman Center, 56th Floor, Jl. Jenderal Sudirman No. 86, Karet Tengsin, Tanah Abang, Jakarta Pusat, DKI Jakarta 10220
Registration number: 4025090931102667
Contact email: info@mitraintr.com

Director
_________________/ Raisa Shahrestani


${formData.company_name_en}
Address: ${formData.address_en}
Registration number: ${formData.registration_number}
Contact email: ${formData.contact_email}

${formData.signatory_title_en}
__________________ / ${formData.signatory_name_en}`;
  };

  const downloadNDA = async (type = 'ru_en') => {
    setIsGenerating(true);
    try {
      // Формируем данные для API в зависимости от типа
      let requestBody;

      if (type === 'eng') {
        // Английская версия - только английские поля
        requestBody = {
          type: 'eng',
          fields: {
            effective_date: new Date(formData.effective_date).toLocaleDateString('ru-RU'),
            company_name: formData.company_name_en,
            country: formData.country_en,
            registration_number: formData.registration_number,
            signatory_name: formData.signatory_name_en,
            signatory_title: formData.signatory_title_en,
            address: formData.address_en,
            email: formData.contact_email
          }
        };
      } else {
        // Двуязычная версия - все поля
        requestBody = {
          type: 'ru_en',
          fields: {
            effective_date: new Date(formData.effective_date).toLocaleDateString('ru-RU'),
            company_name_en: formData.company_name_en,
            company_name_ru: formData.company_name_ru,
            country_en: formData.country_en,
            country_ru: formData.country_ru,
            registration_number: formData.registration_number,
            signatory_name_en: formData.signatory_name_en,
            signatory_name_ru: formData.signatory_name_ru,
            signatory_title_en: formData.signatory_title_en,
            address_en: formData.address_en,
            address_ru: formData.address_ru,
            email: formData.contact_email
          }
        };
      }

      // Формируем URL с query параметром nda_id если он уже существует
      let url = '/nda/generate';
      if (ndaId) {
        url += `?nda_id=${ndaId}`;
        console.log('Reusing existing NDA ID:', ndaId);
      }

      // Вызов API для генерации NDA
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (!response.ok) {
        throw new Error('Failed to generate NDA');
      }

      // Получаем nda_id из заголовка X-NDA-ID (только при первой генерации)
      const ndaIdFromHeader = response.headers.get('X-NDA-ID');
      if (ndaIdFromHeader && !ndaId) {
        setNdaId(ndaIdFromHeader);
        console.log('NDA ID saved:', ndaIdFromHeader);
      }

      // Скачиваем DOCX файл
      const blob = await response.blob();
      const downloadUrl = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = downloadUrl;
      const suffix = type === 'eng' ? 'EN' : 'RU_EN';
      a.download = `NDA_${formData.company_name_en.replace(/\s+/g, '_')}_${suffix}.docx`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(downloadUrl);

      toast.success(`NDA document (${type === 'eng' ? 'English' : 'Bilingual'}) generated and downloaded successfully!`);
    } catch (error) {
      console.error('Error generating NDA:', error);
      toast.error('Failed to generate NDA. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation - bilingual requires all fields
    const requiredFields = ['company_name_en', 'company_name_ru', 'country_en', 'country_ru',
      'registration_number', 'signatory_name_en', 'signatory_name_ru',
      'signatory_title_en', 'address_en', 'address_ru', 'contact_email'];

    const missingFields = requiredFields.filter(field => !formData[field]);

    if (missingFields.length > 0) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (!ndaId) {
      toast.error('Please generate NDA first before submitting');
      return;
    }

    // Check if signed files are uploaded
    if (!signedFileUrlEn) {
      toast.error('Please upload the signed English NDA before submitting');
      return;
    }

    if (!signedFileUrlRu) {
      toast.error('Please upload the signed Bilingual NDA before submitting');
      return;
    }

    setIsSubmitting(true);
    try {
      // Вызов API для финальной отправки NDA
      const response = await fetch(`/nda/${ndaId}/submit`, {
        method: 'POST',
      });

      if (!response.ok) {
        throw new Error('Failed to submit NDA');
      }

      const result = await response.json();

      // Показываем модальное окно успеха
      setShowSuccessModal(true);
      toast.success('NDA submitted successfully!');
    } catch (error) {
      console.error('Error submitting NDA:', error);
      toast.error('Failed to submit NDA. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const canDownload = formData.company_name_en && formData.company_name_ru &&
    formData.country_en && formData.country_ru &&
    formData.registration_number && formData.signatory_name_en &&
    formData.signatory_name_ru && formData.signatory_title_en &&
    formData.address_en && formData.address_ru && formData.contact_email;

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F6F9FC] to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6949a7445bc738ab35d3303b/b2b800413_PTMITLogoIcon.png"
              alt="PT. MITRA INTERNATIONAL TRANSAKSI"
              className="h-16 w-auto"
            />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-[#0B1020] mb-3">
            Non-Disclosure Agreement (Bilingual)
          </h1>
          <p className="text-lg text-[#0B1020]/70 max-w-2xl mx-auto">
            Complete the form below to generate your NDA in both Russian and English
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Block 1: Effective Date */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-[#2B4192]" />
                Document Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                <Label htmlFor="effective_date">Effective Date</Label>
                <Input
                  id="effective_date"
                  type="date"
                  value={formData.effective_date}
                  disabled
                  className="bg-gray-100 cursor-not-allowed"
                />
                <p className="text-xs text-[#0B1020]/50 mt-1">Current date (automatically set)</p>
              </div>
            </CardContent>
          </Card>

          {/* Block 2: Company 1 (PT MITRA) - Read Only */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#2B4192]">Party 1: Disclosing Party</CardTitle>
            </CardHeader>
            <CardContent className="bg-[#F6F9FC] rounded-lg p-6 space-y-3">
              <div>
                <p className="text-sm text-[#0B1020]/60 mb-1">Company Name</p>
                <p className="font-semibold text-[#0B1020]">PT MITRA INTERNASIONAL TRANSAKSI</p>
              </div>
              <div>
                <p className="text-sm text-[#0B1020]/60 mb-1">Registration Number</p>
                <p className="font-semibold text-[#0B1020]">4025112531201916</p>
              </div>
              <div>
                <p className="text-sm text-[#0B1020]/60 mb-1">Authorized Signatory</p>
                <p className="font-semibold text-[#0B1020]">Raisa Shahrestani (Director)</p>
              </div>
              <div>
                <p className="text-sm text-[#0B1020]/60 mb-1">Address</p>
                <p className="font-semibold text-[#0B1020]">
                  Sahid Sudirman Center, 56th Floor, Jl. Jenderal Sudirman No. 86,<br />
                  Karet Tengsin, Tanah Abang, Jakarta Pusat, DKI Jakarta 10220
                </p>
              </div>
              <div>
                <p className="text-sm text-[#0B1020]/60 mb-1">Contact Email</p>
                <p className="font-semibold text-[#0B1020]">info@mitraintr.com</p>
              </div>
            </CardContent>
          </Card>

          {/* Block 3: Company 2 (User's Company) */}
          <Card>
            <CardHeader>
              <CardTitle className="text-[#36A0A2]">Party 2: Receiving Party (Your Company)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Company Name */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="company_name_en">Company Name (English) *</Label>
                  <Input
                    id="company_name_en"
                    value={formData.company_name_en}
                    onChange={(e) => handleChange('company_name_en', e.target.value)}
                    placeholder="e.g., ABC Trading Limited"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="company_name_ru">Company Name (Russian) *</Label>
                  <Input
                    id="company_name_ru"
                    value={formData.company_name_ru}
                    onChange={(e) => handleChange('company_name_ru', e.target.value)}
                    placeholder="например, АБЦ Трейдинг Лимитед"
                    required
                  />
                </div>
              </div>

              {/* Country */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="country_en">Country of Incorporation (English) *</Label>
                  <Input
                    id="country_en"
                    value={formData.country_en}
                    onChange={(e) => handleChange('country_en', e.target.value)}
                    placeholder="e.g., United Kingdom"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="country_ru">Country of Incorporation (Russian) *</Label>
                  <Input
                    id="country_ru"
                    value={formData.country_ru}
                    onChange={(e) => handleChange('country_ru', e.target.value)}
                    placeholder="например, Великобритания"
                    required
                  />
                </div>
              </div>

              {/* Registration Number */}
              <div>
                <Label htmlFor="registration_number">Registration Number *</Label>
                <Input
                  id="registration_number"
                  value={formData.registration_number}
                  onChange={(e) => handleChange('registration_number', e.target.value)}
                  placeholder="Company registration / tax number"
                  required
                />
              </div>

              {/* Signatory Information */}
              <div className="border-t pt-4">
                <h4 className="text-sm font-semibold text-[#0B1020] mb-4">Authorized Signatory</h4>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label htmlFor="signatory_name_en">Full Name (English) *</Label>
                    <Input
                      id="signatory_name_en"
                      value={formData.signatory_name_en}
                      onChange={(e) => handleChange('signatory_name_en', e.target.value)}
                      placeholder="e.g., John Smith"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="signatory_name_ru">Full Name (Russian) *</Label>
                    <Input
                      id="signatory_name_ru"
                      value={formData.signatory_name_ru}
                      onChange={(e) => handleChange('signatory_name_ru', e.target.value)}
                      placeholder="например, Джон Смит"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="signatory_title_en">Title/Position *</Label>
                  <Input
                    id="signatory_title_en"
                    value={formData.signatory_title_en}
                    onChange={(e) => handleChange('signatory_title_en', e.target.value)}
                    placeholder="e.g., Director, CEO, Managing Partner"
                    required
                  />
                </div>
              </div>

              {/* Address */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="address_en">Registered Address (English) *</Label>
                  <Textarea
                    id="address_en"
                    value={formData.address_en}
                    onChange={(e) => handleChange('address_en', e.target.value)}
                    placeholder="Full legal address"
                    rows={3}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="address_ru">Registered Address (Russian) *</Label>
                  <Textarea
                    id="address_ru"
                    value={formData.address_ru}
                    onChange={(e) => handleChange('address_ru', e.target.value)}
                    placeholder="Полный юридический адрес"
                    rows={3}
                    required
                  />
                </div>
              </div>

              {/* Contact Email */}
              <div>
                <Label htmlFor="contact_email">Contact Email *</Label>
                <Input
                  id="contact_email"
                  type="email"
                  value={formData.contact_email}
                  onChange={(e) => handleChange('contact_email', e.target.value)}
                  placeholder="email@company.com"
                  required
                />
                <p className="text-xs text-[#0B1020]/50 mt-1">
                  Generated NDA documents will be sent to this email
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Download NDA Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="w-5 h-5 text-[#2B4192]" />
                Download NDA for Signing
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-[#0B1020]/70">
                Once you've filled in all the information above, download the bilingual NDA document, sign it, and upload the signed files below.
              </p>

              {ndaId && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-sm">
                  <div className="flex items-center gap-2 text-green-700">
                    <CheckCircle2 className="w-4 h-4" />
                    <span className="font-medium">NDA Generated Successfully</span>
                  </div>
                  <p className="text-xs text-green-600 mt-1">
                    NDA ID: <code className="bg-green-100 px-1 rounded">{ndaId}</code>
                  </p>
                </div>
              )}

              <div className="flex flex-wrap gap-3">
                <Button
                  type="button"
                  onClick={() => downloadNDA('ru_en')}
                  disabled={!canDownload || isGenerating}
                  variant="outline"
                  className="border-[#36A0A2] text-[#36A0A2] hover:bg-[#36A0A2] hover:text-white"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#36A0A2] border-t-transparent rounded-full animate-spin mr-2" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 mr-2" />
                      Download Bilingual NDA (ENG/RUS)
                    </>
                  )}
                </Button>
                <Button
                  type="button"
                  onClick={() => downloadNDA('eng')}
                  disabled={!canDownload || isGenerating}
                  variant="outline"
                  className="border-[#2B4192] text-[#2B4192] hover:bg-[#2B4192] hover:text-white"
                >
                  {isGenerating ? (
                    <>
                      <div className="w-4 h-4 border-2 border-[#2B4192] border-t-transparent rounded-full animate-spin mr-2" />
                      Generating...
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4 mr-2" />
                      Download ENG NDA
                    </>
                  )}
                </Button>
              </div>
              {!canDownload && (
                <p className="text-xs text-red-500">
                  Please complete all required fields above to download NDA document
                </p>
              )}
            </CardContent>
          </Card>

          {/* Upload Signed NDA Section */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Upload className="w-5 h-5 text-[#40B691]" />
                Upload Signed NDA
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-[#0B1020]/70 mb-4">
                After signing the NDA documents, please upload them here. Both Russian and English signed versions are required.
              </p>

              {!ndaId && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 text-sm text-yellow-800 mb-4">
                  <p>⚠️ Please generate NDA first before uploading signed files</p>
                </div>
              )}

              {/* English Upload */}
              <div className="border-2 border-dashed border-[#E6ECF2] rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <Label className="font-semibold">Signed English NDA *</Label>
                  {signedFileUrlEn && (
                    <Button
                      type="button"
                      size="sm"
                      variant="ghost"
                      onClick={() => setSignedFileUrlEn('')}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                {signedFileUrlEn ? (
                  <div className="flex items-center gap-2 text-sm text-[#40B691]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>English NDA uploaded successfully</span>
                  </div>
                ) : (
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      onChange={(e) => handleFileUpload(e.target.files?.[0], 'en')}
                      className="hidden"
                      accept=".pdf,.doc,.docx,.zip"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      disabled={uploadingEn || !ndaId}
                      onClick={(e) => e.currentTarget.previousElementSibling?.click()}
                      className="w-full"
                    >
                      {uploadingEn ? (
                        <>
                          <div className="w-4 h-4 border-2 border-[#2B4192] border-t-transparent rounded-full animate-spin mr-2" />
                          Uploading...
                        </>
                      ) : (
                        <>
                          <Upload className="w-4 h-4 mr-2" />
                          Choose File
                        </>
                      )}
                    </Button>
                  </label>
                )}
              </div>

              {/* Russian Upload */}
              <div className="border-2 border-dashed border-[#E6ECF2] rounded-lg p-6">
                <div className="flex items-center justify-between mb-2">
                  <Label className="font-semibold">Signed Bilingual NDA *</Label>
                  {signedFileUrlRu && (
                    <Button
                      type="button"
                      size="sm"
                      variant="ghost"
                      onClick={() => setSignedFileUrlRu('')}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="w-4 h-4" />
                    </Button>
                  )}
                </div>
                {signedFileUrlRu ? (
                  <div className="flex items-center gap-2 text-sm text-[#40B691]">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Russian NDA uploaded successfully</span>
                  </div>
                ) : (
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      onChange={(e) => handleFileUpload(e.target.files?.[0], 'ru')}
                      className="hidden"
                      accept=".pdf,.doc,.docx,.zip"
                    />
                    <Button
                      type="button"
                      variant="outline"
                      disabled={uploadingRu || !ndaId}
                      onClick={(e) => e.currentTarget.previousElementSibling?.click()}
                      className="w-full"
                    >
                      {uploadingRu ? (
                        <>
                          <div className="w-4 h-4 border-2 border-[#36A0A2] border-t-transparent rounded-full animate-spin mr-2" />
                          Uploading...
                        </>
                      ) : (
                        <>
                          <Upload className="w-4 h-4 mr-2" />
                          Choose File
                        </>
                      )}
                    </Button>
                  </label>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="bg-[#2B4192] hover:bg-[#2D368C] text-white px-12 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5 mr-2" />
                  Submit NDA
                </>
              )}
            </Button>
          </div>

          <p className="text-xs text-center text-[#0B1020]/50 max-w-2xl mx-auto">
            By submitting this form, you agree to enter into a Non-Disclosure Agreement with PT. MITRA INTERNATIONAL TRANSAKSI
            for a period of 5 years from the effective date. All information provided will be kept confidential.
          </p>
        </form>
      </div>

      {/* Success Modal */}
      <Dialog open={showSuccessModal} onOpenChange={setShowSuccessModal}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex flex-col items-center gap-4 pt-4">
              <div className="w-16 h-16 rounded-full bg-[#40B691]/10 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-[#40B691]" />
              </div>
              <span className="text-2xl text-center">NDA Submitted Successfully!</span>
            </DialogTitle>
          </DialogHeader>
          <div className="py-4 space-y-4">
            <p className="text-center text-[#0B1020]/70">
              Your NDA has been submitted and is now awaiting signature from PT. MITRA INTERNATIONAL TRANSAKSI.
            </p>
            <div className="bg-[#F6F9FC] rounded-lg p-4 space-y-2 text-sm">
              <p className="font-semibold text-[#0B1020]">Next steps:</p>
              <ul className="space-y-2 text-[#0B1020]/70">
                <li className="flex items-start gap-2">
                  <span className="text-[#40B691] mt-1">•</span>
                  <span>Our team will review your signed NDA</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#40B691] mt-1">•</span>
                  <span>We will countersign and return the fully executed document</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#40B691] mt-1">•</span>
                  <span>You will receive the final copy at: <strong>{formData.contact_email}</strong></span>
                </li>
              </ul>
            </div>
            <Button
              onClick={() => setShowSuccessModal(false)}
              className="w-full bg-[#2B4192] hover:bg-[#2D368C]"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
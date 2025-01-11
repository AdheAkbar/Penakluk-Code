import ContactForm from "../components/ContactForm"

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Hubungi Kami</h1>
      <p className="text-gray-600 mb-8">
        Silakan tinggalkan pesan untuk kami
      </p>
      <ContactForm />
    </div>
  )
}
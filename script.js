// JavaScript kodu, HTML belgesi tamamen yüklendikten sonra çalışsın diye
// 'DOMContentLoaded' olayını dinliyoruz.
document.addEventListener('DOMContentLoaded', () => {

    // Sadece iletişim sayfasındaysak formu bulmaya çalış
    const iletisimFormu = document.getElementById('iletisim-formu');
    
    // Eğer form bu sayfada bulunuyorsa (yani iletişim sayfasındaysak)
    if(iletisimFormu) {
        const formMesaji = document.getElementById('form-mesaji');

        // Forma "submit" (gönderme) olayı eklendiğinde...
        iletisimFormu.addEventListener('submit', (event) => {
            // 1. Formun varsayılan gönderme işlemini (sayfa yenileme) engelle
            event.preventDefault(); 
            
            // 2. Kullanıcıdan verileri (gibi) al
            const ad = document.getElementById('ad').value;

            // 3. Ekrana bir başarı mesajı göster
            formMesaji.textContent = `Teşekkürler, ${ad}! Mesajınız başarıyla alındı.`;
            formMesaji.style.color = 'green';

            // 4. Formu temizle
            iletisimFormu.reset();
            
            // 5. (İsteğe bağlı) Mesajı birkaç saniye sonra kaldır
            setTimeout(() => {
                formMesaji.textContent = '';
            }, 5000); // 5 saniye sonra
        });
    }
});
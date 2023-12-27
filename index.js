        // Ambil elemen yang ingin diubah warnanya
        const colorChanger = document.getElementById('colorChanger');
    
        // Daftar warna yang sudah disediakan
        const colorClasses = [
          'divider-primary', 'divider-secondary',
          'divider-accent', 'divider-success', 'divider-warning',
          'divider-info', 'divider-error'
        ];
    
        // Fungsi untuk mendapatkan warna acak dari daftar warna yang sudah disediakan
        function getRandomCustomColor() {
          // Pilih warna acak dari daftar
          const randomColor = colorClasses[Math.floor(Math.random() * colorClasses.length)];
    
          return randomColor;
        }
    
        // Fungsi untuk mengubah warna setiap detik
        function changeColor() {
          // Hapus kelas warna saat ini
          colorChanger.classList.remove(...colorClasses);
    
          // Dapatkan warna acak dari daftar warna yang sudah disediakan
          const randomColorClass = getRandomCustomColor();
    
          // Tambahkan kelas warna acak
          colorChanger.classList.add(randomColorClass);
        }
    
        // Set interval untuk memanggil fungsi changeColor setiap detik (1000ms)
        setInterval(changeColor, 1000);
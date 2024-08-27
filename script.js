const apiKey = '31193d562ba13d4e2a3629a830cafae7';
const kota = document.getElementById('kota');
const tombol = document.getElementById('tombol');
const hasilCuaca = document.getElementById('hasil');

tombol.addEventListener('click', () => {
    const lokasi = kota.value.trim();

    if (!lokasi) {
        hasilCuaca.innerHTML = '<div style="color:red;">Masukkan lokasi yang valid.</div>';
        return;
    }

    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${lokasi}&appid=${apiKey}&units=metric`)
        .then(response => {
            const data = response.data;

            hasilCuaca.innerHTML = `
                <div><strong>Lokasi:</strong> ${data.name}</div>
                <div><strong>Suhu Udara:</strong> ${data.main.temp.toFixed(2)}°C</div>
                <div><strong>Cuaca:</strong> ${data.weather[0].description}</div>
                <div><strong>Kelembapan:</strong> ${data.main.humidity}%</div>
                <div><strong>Kecepatan Angin:</strong> ${data.wind.speed} m/s</div>
            `;
        })
        .catch(error => {
            hasilCuaca.innerHTML = '<div style="color:red;">Lokasi tidak ditemukan atau terjadi kesalahan.</div>';
            console.error('Terjadi kesalahan:', error);
        });
});

import 'bootstrap-icons/font/bootstrap-icons.css';

const Home = () => {
  return (
    <div className="bodybg mt-5" style={{height:'800px'}}>
      <div className="mb-5">&nbsp;</div>
      <div className="d-flex justify-content-center">
        <div class="card mt-5" style={{width:'20rem'}}>
          <i class="bi bi-person-circle text-center"></i>
          <div class="card-body">
            <h5 class="card-title">Herlin Dwi Vitaloka</h5>
            <p class="card-text">Mahasiswa Universitas Multi Data Palembang, jurusan Sistem Informasi semester 2</p>
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><i class="bi bi-book"></i> Sistem Informasi</li>
            <li class="list-group-item"><i class="bi bi-person-vcard"></i> 2327240034</li>
            <li class="list-group-item"><i class="bi bi-building"></i> Universitas Multi Data Palembang</li>
          </ul>
          <div class="card-body">
            <a className="text-black mx-2 text-decoration-none" href="https://github.com/Herlin6"><i class="bi bi-github"></i> Github</a>
            <a className="text-black text-decoration-none" href="https://www.instagram.com/herlindwi.06?igsh=MWJzbXFjNmV3eDVwYw=="><i class="bi bi-instagram"></i> Instagram</a>
          </div>
        </div>
      </div>
    </div>
    )
  }

  export default Home
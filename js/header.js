function createHeader() {
    const headerHTML = `
    <header>
      <div class="logo-container">
        <a href="index.html" class="logo-link">
          <img src="images/ISA_icon.png" alt="ISA Icon">
          <span class="header-text">International School of Agrivoltaics (ISAv)</span>
        </a>
      </div>
      <button class="menu-toggle" id="menuToggle">
        <i class="fas fa-bars"></i>
      </button>
      <nav id="mainNav">
        <ul>
          <li>
            <a href="#">Who We Are</a>
            <ul>
              <li><a href="map_of_stakeholders.html">Map of Stakeholders</a></li>
              <li><a href="university_of_arizona.html">University of Arizona</a></li>
              <li><a href="arava_institute.html">Arava Institute</a></li>
              <li><a href="unam.html">UNAM</a></li>
              <li><a href="um6p.html">UM6P</a></li>  <!-- ✅ ADDED UM6P HERE -->
            </ul>
          </li>
          <li>
            <a href="#">Our Approach</a>
            <ul>
              <li><a href="sustainability.html">Sustainability</a></li>
              <li><a href="research.html">Research</a></li>
            </ul>
          </li>
          <li>
            <a href="#">Our Programs</a>
            <ul>
              <li><a href="agrivoltaics_training.html">Agrivoltaics Training</a></li>
              <li><a href="workshops.html">Workshops</a></li>
            </ul>
          </li>
          <li><a href="news_insights.html">News & Insights</a></li>
        </ul>
      </nav>
    </header>
    `;
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
  }
  
  createHeader();
  
  document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle functionality
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
  
    if (menuToggle && mainNav) {
      menuToggle.addEventListener('click', function() {
        mainNav.classList.toggle('active');
  
        const icon = menuToggle.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
          icon.classList.remove('fa-bars');
          icon.classList.add('fa-times');
        } else {
          icon.classList.remove('fa-times');
          icon.classList.add('fa-bars');
        }
      });
    }
  });
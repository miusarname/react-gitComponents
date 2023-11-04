import "./style/slidebar.style.css";

export default function Slidebar() {
  return (
    <>
      <nav>
        <ul>
          <li><a href="#" class="logo">
            <img src="/logo.jpg" alt="" />
            <span class="nav-item">DashBoard</span>
          </a></li>
          <li><a href="#">
            <i class="fas fa-home"></i>
            <span class="nav-item">Home</span>
          </a></li>
          <li><a href="">
            <i class="fas fa-users"></i>
            <span class="nav-item">Clients</span>
          </a></li>
          <li><a href="">
            <i class="fas fa-user-ninja"></i>
            <span class="nav-item">Empleados</span>
          </a></li>
          <li><a href="">
            <i class="fas fa-box"></i>
            <span class="nav-item">Productos</span>
          </a></li>
          <li><a href="">
            <i class="fas fa-user-tie"></i>
            <span class="nav-item">Proveedores</span>
          </a></li>
          <li><a href="">
            <i class="fas fa-tags"></i>
            <span class="nav-item">Ventas</span>
          </a></li>
          <li><a href="" class="logout">
            <i class="fas fa-sign-out-alt"></i>
            <span class="nav-item">Log out</span>
          </a></li>
        </ul>
      </nav>
    </>
  )
}

import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCamera, faEnvelope, faPhone,faPeopleGroup, faPeopleRoof ,faMobileScreenButton, faWheelchair, faVenusMars , faAddressCard, faIdCard, faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import "react-datepicker/dist/react-datepicker.css";
import { es } from "date-fns/locale/es";
import { registerLocale } from "react-datepicker";
import { useState } from 'react';
import Submit from "../../particulas/SubmitButtons/Submit.jsx";

import Style from "../../../public/estilosGenerales/formularios.module.css";

const RegistroUsuario = () => {
  const [error, setError] = useState(null);
  registerLocale("es", es);
  const [selectedImage, setSelectedImage] = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [formData, setFormData] = useState({
    cedula: '',
    primerapellido: '',
    segundoapellido: '',
    primernombre: '',
    segundonombre: '',
    correo: '',
    sexo: '',
    fechaNacimiento: new Date(),
    discapacidad: '',
    etnia: '',
    telefonoL: '',
    status: false,
    telefonoM: '',
    gu: '',
  });

  //Esta función captura la imagen que ingresa el usuario para poder hacer la previsualización.
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  //Está función de acá captura la mayoría de los datos del formulario, exceptuando el de fecha
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  //Función para capturar la fecha
  const handleDateChange = (date) =>{
    setStartDate(date);
    setFormData({
      ...formData,
      fechaNacimiento: date,
    })
  }

  const handleStatusChange = (e) =>{
    const value = e.target.value === "true";
    setFormData({
      ...formData,
      status: value,
    })
  }

  const removeCircularReferences = (obj) => {
    const seen = new WeakSet();
    return JSON.parse(JSON.stringify(obj, (key, value) =>{
      if (typeof value === "object" && value !=null){
        if (seen.has(value)){
          return;
        }
        seen.add(value)
      }
      return
    }));
  }

  //Está función maneja la librería de fechas que decidimos usar para el desarrollo, aun no captura la fecha
  const fechaNacimiento = startDate
    ? startDate.toLocaleDateString("es-ES")
    : "No definido";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
    cedula,
    primerapellido,
    segundoapellido,
    primernombre,
    segundonombre,
    correo,
    sexo,
    fechaNacimiento,
    discapacidad,
    etnia,
    telefonoL,
    status,
    telefonoM,
    gu
    }

    try{
      const response = await fetch('https://database-gb6x.onrender.com/',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(removeCircularReferences(user)),
      });

      const json = await response.json();

      if (!response.ok){
        throw new Error(json.error || "Error en la solicitud")
      }
      setFormData('');
      console.log("Usuario añadido con éxito", json)
    } catch(err){
      setError(err.message);
    }
    console.log("Datos enviados con éxito")
    console.log(formData);
  };

  const handleBack = () => {
    console.log('Volver');
  };

  return (
<section className={Style.ScreenContainer}> 

  <form className={Style.form} onSubmit={handleSubmit}>

    <h1 className = {Style.h1 }>Registro de usuario nuevo</h1>

    <div className={Style.dateContainer} >

      <div className={Style.halfContainer} >

      <label htmlFor="primerapellido">
      <strong className={Style.strong}> Primer Apellido </strong>  
      </label>

      <label htmlFor="primerapellido" className={Style.label}>
        
      <FontAwesomeIcon icon={faAddressCard}  size='lg' style={{ color: "#5271ff" }}  />
      
      <input
      	placeholder = "Primer apellido"
        maxLength="20"
        className={Style.input}
        type="text"
        id="primerapellido"
        name="primerapellido"
        value={formData.primerapellido}
        onChange={handleChange}
        required
      />
      </label>
      </div>

      <div className={Style.halfContainer}>

  <label htmlFor="segundoapellido">
      <strong className={Style.strong}>  Segundo Apellido </strong> 
  </label>

      <label htmlFor="segundoapellido" className={Style.label}>
      <FontAwesomeIcon icon={faAddressCard}  size='lg' style={{ color: "#5271ff" }}  />
      <input
        placeholder = "Segundo apellido"
        maxLength="20"
        className={Style.input}
        type="text"
        id="segundoapellido"
        name="segundoapellido"
        value={formData.segundoapellido}
        onChange={handleChange}
        required
      />
      </label>
      </div>
      </div>

    <div className={Style.dateContainer} >
      

    <div className={Style.halfContainer} >
    <label htmlFor="primernombre">
       <strong className={Style.strong} > Primer Nombre </strong> 
    </label>
    
    <label htmlFor='primernombre' className ={Style.label}>
    <FontAwesomeIcon icon={faAddressCard}  size='lg' style={{ color: "#5271ff" }}  />
      <input
      	placeholder = "Primer nombre"
        maxLength="20"
        className={Style.input}
        type="text"
        id="primernombre"
        name="primernombre"
        value={formData.primernombre}
        onChange={handleChange}
        required
      />
    </label>
    </div>

    <div className={Style.halfContainer} >
    <label htmlFor="segundonombre">
      <strong className={Style.strong} >Segundo nombre</strong>
    </label>
    <label htmlFor="segundonombre" className={Style.label} >
    <FontAwesomeIcon icon={faAddressCard}  size='lg' style={{ color: "#5271ff" }}  />
      <input
        placeholder = "Segundo nombre"
        maxLength="20"
        className={Style.input}
        type="text"
        id="segundonombre"
        name="segundonombre"
        value={formData.segundonombre}
        onChange={handleChange}
        required
      />
      </label>
      </div>
    </div>

    <label htmlFor='correo'>
      <strong className={Style.strong} > Correo</strong>
    </label>
      <label className={Style.label}>
        <FontAwesomeIcon icon={faEnvelope} size='lg' style={{ color: "#5271ff" }}/>      
      <input
      	placeholder = "Correo"
        className={Style.input}
        type="email"
        id="correo"
        name="correo"
        value={formData.correo}
        onChange={handleChange}
        required
      />
    </label>
    
    <label htmlFor="cedula">
      <strong className={Style.strong} > Cedula </strong>
    </label>
    <label className = {Style.label}>
    <FontAwesomeIcon icon={faIdCard} size='lg' style={{ color: "#5271ff" }} />
      <input
      	placeholder = "Cedula"
        maxLength = "8"
        className={Style.input}
        type="number"
        id="cedula"
        name="cedula"
        value={formData.cedula}
        onChange={handleChange}
        required
      />
    </label>


    <label htmlFor="telefonoL" >
     <strong className={Style.strong}>Telefono local</strong >
    </label>

    <label className={Style.label}>
    <FontAwesomeIcon icon={faPhone} size='lg' style={{ color: "#5271ff" }} />
      <input
      	placeholder = "Telefono Local"
        className={Style.input}
        type="tel"
        id="telefonoL"
        name="telefonoL"
        maxLength="11"
        value={formData.telefonoL}
        onChange={handleChange}
      />
    </label>

    <label htmlFor="telefonoM">
      <strong className={Style.strong} > Teléfono Móvil </strong>
    </label>

    <label className = {Style.label}>
      
      <FontAwesomeIcon icon={faMobileScreenButton} size='lg' style={{ color: "#5271ff" }} />
      <input
      	placeholder = "Teléfono Movil"
        className={Style.input}
        type="tel"
        id="telefonoM"
        name="telefonoM"
        maxLength="11"
        value={formData.telefonoM}
        onChange={handleChange}
      />
    </label>


    <div className={Style.dateContainer} >

      <div className={Style.halfContainer} >
    <label htmlFor='date'>
      <strong className={Style.strong} >Fecha de nacimiento</strong >
    </label>
    <label className={Style.label}>

        <FontAwesomeIcon icon={faCalendarDays} size="lg" style={{ color: "#5271ff" }} />

        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          locale="es"
          dateFormat="dd/MM/yyyy"
          required
          id='date'
          className={Style.input}
        />
    </label>
    </div>


  <div className={Style.halfContainer}>
    <strong className={Style.strong}>Status</strong >
  <label className = {Style.label}>

    <label htmlFor='status' >
      <input 
       type = "radio"
       id="status"
       name="status"
       value={true}
       checked={formData.status === true}
       onChange={handleStatusChange}
      />
      Activo
     </label>
     <label>
      <input
       type = "radio"
       id="status"
       name="status"
       value={false}
       checked={formData.status === false}
       onChange={handleStatusChange}
      />
      Inactivo
    </label>
  </label>
  </div>
  </div>

    <h2 className={Style.h2} > Datos adicionales </h2>

  <label >
    <strong className={Style.strong}>Etnia</strong >
  </label> 

    <label className={Style.label}>
    <FontAwesomeIcon icon={faPeopleRoof} size='lg' style={{ color: "#5271ff" }} />
      <select
        className={Style.input}
        id="etnia"
        name="etnia"
        value={formData.etnia}
        onChange={handleChange}
        required
      >
        <option value="ninguna">ninguna</option>
        <option value="Wayuu">Wayuu</option>
        <option value="Afroamericano">Afroamericano</option>
        <option value="Otro">Otro</option>
      </select>
    </label>

    <label htmlFor="discapacidad">
      <strong className={Style.strong} > Discapacidad  </strong>
    </label>

    <label className={Style.label}>
    <FontAwesomeIcon icon={faWheelchair}  size='lg' style={{ color: "#5271ff" }} />
      <select
        className={Style.input}
        id="discapacidad"
        name="discapacidad"
        value={formData.discapacidad}
        onChange={handleChange}
        required
      >
        <option value="No">No</option>
        <option value="Sí">Sí</option>
      </select>
    </label>

    <label htmlFor="sexo">
      <strong className={Style.strong} > sexo </strong>
    </label>
    <label htmlFor='sexo' className = {Style.label}>
    <FontAwesomeIcon icon={faVenusMars} size='lg' style={{ color: "#5271ff" }} />
      <select
        className={Style.input}
        id="sexo"
        name="sexo"
        value={formData.sexo}
        onChange={handleChange}
        required
      >
        <option value="femenino">Femenino</option>
        <option value="masculino">Masculino</option>
      </select>
  </label>


    <label htmlFor="gu">
      <strong className={Style.strong} > Grupo de Usuario </strong>
    </label>

  <label htmlFor="gu" className = {Style.label}>
  <FontAwesomeIcon icon={faPeopleGroup} size='lg' style={{ color: "#5271ff" }} />
      <select
        className={Style.input}
        id="gu"
        name="gu"
        value={formData.gu}
        onChange={handleChange}
        required
      >
        <option value="estudiante">Estudiante</option>
        <option value="admin<">Admin</option>
        <option value="superadmin">SuperAdmin</option>
        <option value="operador">Operador</option>
      </select>
  </label>

      <label htmlFor="img">
        <strong className={Style.strong} > Foto </strong>
      </label>

      <label className={Style.label} >
      <FontAwesomeIcon icon={faCamera} size='lg' style={{ color: "#5271ff" }} />
      <input 
        className = {Style.input}
        type = "file"
        id = "img"
        name = "img"
        value = {formData.img}
        onChange = {handleImageChange}
        required
      />
      </label>
      {selectedImage && (
        <div className={Style.Preview}>
          <img src={selectedImage} alt="Vista previa" className={Style.Preview_Img}  />
        </div>
      )}

      
<Submit />

  </form>
</section>
  );
};

export default RegistroUsuario;


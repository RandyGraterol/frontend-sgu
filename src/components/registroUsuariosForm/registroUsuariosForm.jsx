import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCamera, faEnvelope, faPhone, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import "react-datepicker/dist/react-datepicker.css";
import { es } from "date-fns/locale/es";
import { registerLocale } from "react-datepicker";
import { useState } from 'react';
import './RegistroUsuarioMediaQuery.css'
import styles from './RegistroUsuario.module.css'

const RegistroUsuario = () => {
  const [error, setError] = useState("");
  registerLocale("es", es);
  const [selectedImage, setSelectedImage] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [formData, setFormData] = useState({
    cedula:"",
    primerapellido: "",
    segundoapellido: "",
    primernombre: "",
    segundonombre: "",
    correo: "",
    fechaNacimiento: "",
    sexo: "",
    discapacidad: "",
    etnia: "" ,
    telefonoL:"",
    status: "",
    telefonoM:"",
    gu:"",
    img: ""
  });

  //Esta función captura la imagen que ingresa el usuario para poder hacer la previsualización.
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
        setFormData({
          ...formData,
          img: reader.result,
        });
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

  {/*const removeCircularReferences = (obj) => {
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
*/}
  //Está función maneja la librería de fechas que decidimos usar para el desarrollo, aun no captura la fecha
  const fechaNacimiento = startDate
    ? startDate.toLocaleDateString("es-ES")
    : "No definido";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = [formData]
  
    try{
      const response = await fetch('https://database-gb6x.onrender.com/registerEstudiante',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const json = await response.json();

      if (!response.ok){
        throw new Error(json.error || "Error en la solicitud")
      }
      setFormData('');
      console.log(json)
    } catch(err){
      setError(err.message);
    }

    console.log(data)
  };

  const handleBack = () => {
    console.log('Volver');
  };

  return (
<section className={styles.FullSection}> 
  <div className={`Container ${styles.Container}`}>
  	<h6 className = {`Title_Text ${styles.Title_Text}`}>Registro de usuario nuevo</h6>
  <form encType="multipart/form-data" className={`Form ${styles.Form}`} onSubmit={handleSubmit}>
  <div className = {styles.Form_Title}>
    <h1>Apellidos</h1>
  </div>
  <div className = {styles.Form_Group}>
    <div className={styles.Form_Border}>
      <input
        placeholder = "Segundo apellido"
        maxLength="20"
        className={`Form_Input ${styles.Form_Input}`}
        type="text"
        id="segundoapellido"
        name="segundoapellido"
        value={formData.segundoapellido}
        onChange={handleChange}
        required
      />
    </div>
    <div className = {styles.Form_Border}>
      <input
      	placeholder = "Primer apellido"
        maxLength="20"
        className={`Form_Input ${styles.Form_Input}`}
        type="text"
        id="primerapellido"
        name="primerapellido"
        value={formData.primerapellido}
        onChange={handleChange}
        required
      />
    </div>
    </div>
    <div className = {styles.Form_Title}>
      <h1>Nombres</h1>
    </div>
    <div className = {styles.Form_Group}>
    <div className={styles.Form_Border}>
      <input
        placeholder = "Segundo nombre"
        maxLength="20"
        className={`Form_Input ${styles.Form_Input}`}
        type="text"
        id="segundonombre"
        name="segundonombre"
        value={formData.segundonombre}
        onChange={handleChange}
        required
      />
    </div>
    <div className = {styles.Form_Border}>
      <input
      	placeholder = "Primer nombre"
        maxLength="20"
        className={`Form_Input ${styles.Form_Input}`}
        type="text"
        id="primernombre"
        name="primernombre"
        value={formData.primernombre}
        onChange={handleChange}
        required
      />
    </div>
    </div>
    <div className = {styles.Form_Title}>
      <h1>Datos personales</h1>
    </div>
    <div className={styles.Form_Group}>
      <div className={styles.Form_Border}>
       <FontAwesomeIcon icon={faEnvelope} className={styles.Icon}/>      
      <input
      	placeholder = "Correo"
        className={`Form_Input ${styles.Form_Input}`}
        type="email"
        id="correo"
        name="correo"
        value={formData.correo}
        onChange={handleChange}
        required
      />
    </div>
    <div className = {styles.Form_Border}>
      <input
      	placeholder = "Cedula"
        maxLength = "8"
        className={`Form_Input ${styles.Form_Input}`}
        type="number"
        id="cedula"
        name="cedula"
        value={formData.cedula}
        onChange={handleChange}
        required
      />
    </div>
    </div>
    <div className = {styles.Form_Title}>
     <h1>Números de telefono</h1>
    </div>
  <div className = {styles.Form_Group}>
    <div className={styles.Form_Border}>
    <FontAwesomeIcon icon={faPhone} className={`Icon ${styles.Icon}`}/>
      <input
      	placeholder = "Telefono Local"
        className={styles.Form_Input}
        type="tel"
        id="telefonoL"
        name="telefonoL"
        maxLength="11"
        value={formData.telefonoL}
        onChange={handleChange}
      />
    </div>
    <div className = {styles.Form_Border}>
      <FontAwesomeIcon icon={faMobileScreenButton} className={styles.Icon}/>
      <input
      	placeholder = "Teléfono Movil"
        className={`Form_Input ${styles.Form_Input}`}
        type="tel"
        id="telefonoM"
        name="telefonoM"
        maxLength="11"
        value={formData.telefonoM}
        onChange={handleChange}
      />
    </div>
  </div>
    <div className = {styles.Form_Title}>
      <h1>Fecha de nacimiento</h1>
    </div>
    <div className={styles.Form_Border}>
        <label className = {styles.Form_Input}>
        <DatePicker
          selected={startDate}
          onChange={handleDateChange}
          locale="es"
          dateFormat="dd/MM/yyyy"
          required
          className={styles.Date_Input}
        />
        </label>
    </div>
  <div className = {`Radius ${styles.Radius}`}>
  <div className = {styles.Form_Title}>
    <h1>Status</h1>
  </div>
    <label className = {`Label_Radius ${styles.Label_Radius}`} >
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
     <label className = {`Label_Radius ${styles.Label_Radius}`}>
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
  </div>
  <div className = {`Select ${styles.Select}`}>
  <div className = {styles.Form_Title}>
    <h1>Datos adicionales</h1>
  </div> 
    <div className={`Select_Group ${styles.Select_Group}`}>
      <select
        className={`Select_Input ${styles.Select_Input}`}
        id="etnia"
        name="etnia"
        value={formData.etnia}
        onChange={handleChange}
        required
      >
        <option value="">Etnía</option>
        <option value="Wayuu">Wayuu</option>
        <option value="Afroamericano">Afroamericano</option>
        <option value="Otro">Otro</option>
      </select>
    </div>
    <div className={styles.Select_Group}>
      <select
        className={`Select_Input ${styles.Select_Input}`}
        id="discapacidad"
        name="discapacidad"
        value={formData.discapacidad}
        onChange={handleChange}
        required
      >
        <option value="">Discapacidad</option>
        <option value="Sí">No</option>
        <option value="No">Sí</option>
      </select>
    </div>
    <div className = {styles.Select_Group}>
      <select
        className={`Select_Input ${styles.Select_Input}`}
        id="sexo"
        name="sexo"
        value={formData.sexo}
        onChange={handleChange}
        required
      >
        <option value="">Sexo</option>
        <option value="masculino">Masculino</option>
        <option value="femenino">Femenino</option>
      </select>
  </div>
  <div className = {styles.Select_Group}>
      <select
       className={`Select_Input ${styles.Select_Input}`}
        id="gu"
        name="gu"
        value={formData.gu}
        onChange={handleChange}
        required
      >
        <option value="">Grupo de usuarios</option>
        <option value="admin<">Admin</option>
        <option value="superadmin">SuperAdmin</option>
        <option value="operador">Operador</option>
        <option value="estudiante">Estudiante</option>
      </select>
  </div>
    <div className={styles.PreBox} >
      <label>
      <input 
        className = {`File_Input ${styles.File_Input}`}
        type = "file"
        id = "img"
        name = "img"
        defaultValue = {formData .img}
        onChange = {handleImageChange}
        required
      />
    <div className = {`File ${styles.File}`}>
      <FontAwesomeIcon icon={faCamera} className={styles.File_Logo}/>
    </div>
      </label>
    </div>
      {selectedImage && (
        <div className={styles.Preview}>
          <img src={selectedImage} alt="Vista previa" className={styles.Preview_Img}  />
        </div>
      )}
    <div className = {`Button_Group ${styles.Button_Group}`}>
      <button className = {`Button ${styles.Button}`} type="submit">Enviar</button>
      <button className = {`Button ${styles.Button}`} type="button" onClick={handleBack}>Volver</button>
    </div>
  </div>
  </form>
</div>
</section>
  );
};

export default RegistroUsuario;


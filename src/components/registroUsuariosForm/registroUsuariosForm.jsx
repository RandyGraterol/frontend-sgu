import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faCamera, faIdCardClip, faUser, faEnvelope, faPhone, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import "react-datepicker/dist/react-datepicker.css";
import { es } from "date-fns/locale/es";
import { registerLocale } from "react-datepicker";
import { useState } from 'react';
import './RegistroUsuarioMediaQuery.css'
import styles from './RegistroUsuario.module.css'

const RegistroUsuario = () => {
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
    fechanacimiento: '',
    discapacidad: '',
    etnia: '',
    telefonoL: '',
    status: '',
    telefonoM: '',
    gu: '',
  });

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
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const fechaNacimiento = startDate
    ? startDate.toLocaleDateString("es-ES")
    : "No definido";

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleBack = () => {
    console.log('Volver');
  };

  return (
<div className={`Container ${styles.Container}`}>
  	<h6 className = {`Title_Text ${styles.Title_Text}`}>Registro de usuario nuevo</h6>
  <form className={`Form ${styles.Form}`} onSubmit={handleSubmit}>
    <div className={styles.Form_Group}>
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
      <FontAwesomeIcon icon={faUser} className = {styles.Form_Img}/>
    </div>
    <div>
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
      <FontAwesomeIcon icon={faUser} className = {styles.Form_Img}/>
    </div>
    <div className={styles.Form_Group}>
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
      <FontAwesomeIcon icon={faUser} className = {styles.Form_Img}/>
    </div>
    <div className={styles.Form_Group}>
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
      <FontAwesomeIcon icon={faUser} className = {styles.Form_Img}/>
    </div>
    <div className={styles.Form_Group}>
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
     <FontAwesomeIcon icon={faIdCardClip} className={styles.Form_Img} />
    </div>
<<<<<<< HEAD
=======
    <div className={styles.Form_Group}>
      <input
      	placeholder = "Primer apellido"
        className={styles.Form_Input}
        type="text"
        id="apellidos"
        name="apellidos"
        value={formData.apellidos}
        onChange={handleChange}
        required
      />
      <FontAwesomeIcon icon={faUser} className = {styles.Form_Img}/>
    </div>
    <div className={styles.Form_Group}>
      <input
        placeholder = "Segundo apellido"
        className={styles.Form_Input}
        type="text"
        id="apellidos"
        name="apellidos"
        value={formData.apellidos}
        onChange={handleChange}
        required
      />
      <FontAwesomeIcon icon={faUser} className = {styles.Form_Img}/>
    </div>
    <div className={styles.Form_Group}>
      <input
      	placeholder = "Primer nombre"
        className={styles.Form_Input}
        type="text"
        id="nombres"
        name="nombres"
        value={formData.nombres}
        onChange={handleChange}
        required
      />
      <FontAwesomeIcon icon={faUser} className = {styles.Form_Img}/>
    </div>
    <div className={styles.Form_Group}>
      <input
        placeholder = "Segundo nombre"
        className={styles.Form_Input}
        type="text"
        id="nombres"
        name="nombres"
        value={formData.nombres}
        onChange={handleChange}
        required
      />
      <FontAwesomeIcon icon={faUser} className = {styles.Form_Img}/>
    </div>
>>>>>>> ab44d3bcb1674adba1038f244b09e00746e15c3b
    <div className={styles.Form_Group}>
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
     <FontAwesomeIcon icon = {faEnvelope} className = {styles.Form_Img}/>
    </div>
    <div className={styles.Form_Group}>
<<<<<<< HEAD
      <input
      	placeholder = "Telefono Local"
        className={`Form_Input ${styles.Form_Input}`}
        type="tel"
        id="telefonoL"
        name="telefonoL"
        maxLength="11"
        value={formData.telefonoL}
        onChange={handleChange}
      />
      <FontAwesomeIcon icon={faPhone} className = {styles.Form_Img}/>
    </div>
    <div className={styles.Form_Group}>
        <label className = {`Date_Label ${styles.Date_Label}`}>
=======
        <label className = {styles.Date_Label}>
>>>>>>> ab44d3bcb1674adba1038f244b09e00746e15c3b
          Fecha nacimiento
        </label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          locale="es"
          dateFormat="dd/MM/yyyy"
          required
          className={styles.Date_Input}
        />
    </div>
    <div className={styles.Form_Group}>
      <input
      	placeholder = "Telefono Local"
        className={styles.Form_Input}
        type="tel"
        id="telefonoL"
        name="telefonoL"
        maxlength="11"
        value={formData.telefonoL}
        onChange={handleChange}
      />
      <FontAwesomeIcon icon={faPhone} className = {styles.Form_Img}/>
    </div>
    <div className={styles.Form_Group}>
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
     	<FontAwesomeIcon icon={faMobileScreenButton} className = {styles.Form_Img}/>
    </div>
  <div className = {`Radius ${styles.Radius}`}>
    <label className={`Radius_Label ${styles.Radius_Label}`}>Status</label>
    <label className = {`Radius_Label ${styles.Radius_Label}`} >Act.
      <input 
       type = "radio"
       id="status"
       name="status"
       value={formData.status}
      />
     </label>
     <label className = {`Radius_Label ${styles.Radius_Label}`}>Inact.
      <input
       type = "radio"
       id="status"
       name="status"
       value={formData.status}
      />
    </label>
  </div>
  <div className = {`Select ${styles.Select}`}>
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
        <option value={formData.etnia}>Wayuu</option>
        <option value={formData.etnia}>Afroamericano</option>
        <option value={formData.etnia}>Otro</option>
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
      {selectedImage && (
        <div className={styles.Preview}>
          <img src={selectedImage} alt="Vista previa" className={styles.Preview_Img}  />
        </div>
      )}
    <div className = {`File ${styles.File}`}>
      <label>
      <FontAwesomeIcon icon={faCamera} className={styles.File_Logo}/>
      <input 
        className = {`File_Input ${styles.File_Input}`}
        type = "file"
        id = "img"
        name = "img"
        value = {formData.img}
        onChange = {handleImageChange}
        required
      />
      </label>
    </div>
    </div>
    <div className = {`Button_Group ${styles.Button_Group}`}>
      <button className = {`Button ${styles.Button}`} type="submit">Enviar</button>
      <button className = {`Button ${styles.Button}`} type="button" onClick={handleBack}>Volver</button>
    </div>
  </div>
  </form>
</div>
  );
};

export default RegistroUsuario;


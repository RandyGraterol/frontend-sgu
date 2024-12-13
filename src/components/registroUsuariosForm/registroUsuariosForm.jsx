import DatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faIdCardClip, faUser, faEnvelope, faPhone, faMobileScreenButton } from '@fortawesome/free-solid-svg-icons';
import "react-datepicker/dist/react-datepicker.css";
import { useState } from 'react';
import styles from './RegistroUsuario.module.css'

const RegistroUsuario = () => {
  const [startDate, setStartDate] = useState(new Date())
  const [formData, setFormData] = useState({
    cedula: '',
    primerapellido: '',
    segundoapellido: '',
    primernombre: '',
    segundonombre: '',
    correo: '',
    fechaNacimiento: '',
    sexo: '',
    discapacidad: '',
    etnia: '',
    telefonoL: '',
    status: '',
    telefonoM: '',
    gu: '',
    img: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleBack = () => {
    console.log('Volver');
  };

  return (
<div className={styles.Container}>
  	<h6 className = {styles.Title_Text}>Registro de usuario nuevo</h6>
  <form className={styles.Form} onSubmit={handleSubmit}>
    <div className={styles.Form_Group}>
      <input
      	placeholder = "Cedula"
        maxlength = "8"
        className={styles.Form_Input}
        type="number"
        id="cedula"
        name="cedula"
        value={formData.cedula}
        onChange={handleChange}
        required
      />
     <FontAwesomeIcon icon={faIdCardClip} className={styles.Form_Img} />
    </div>
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
    <div className={styles.Form_Group}>
      <input
      	placeholder = "Correo"
        className={styles.Form_Input}
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
        <label className = {styles.Date_Label}>
          Fecha nacimiento
        </label>
        <DatePicker
          className = {styles.Date_Input}
          name="fechaNacimiento"
          id="fechaNacimiento"
          value={setFormData.fechaNacimiento}
          selected = {startDate}
          onChange = {(date) => setStartDate(date)}
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
        className={styles.Form_Input}
        type="tel"
        id="telefonoM"
        name="telefonoM"
        maxlength="11"
        value={formData.telefonoM}
        onChange={handleChange}
      />
     	<FontAwesomeIcon icon={faMobileScreenButton} className = {styles.Form_Img}/>
    </div>
  <div className = {styles.Radius}>
    <label className={styles.Radius_Label}>Status</label>
    <label className = {styles.Radius_Label} >Act.
      <input 
       type = "radio"
       id="status"
       name="status"
       value={formData.status}
      />
     </label>
     <label className = {styles.Radius_Label}>Inact.
      <input
       type = "radio"
       id="status"
       name="status"
       value={formData.status}
      />
    </label>
  </div>
  <div className = {styles.Select}>
    <div className={styles.Select_Group}>
      <select
        className={styles.Select_Input}
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
        className={styles.Select_Input}
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
        className={styles.Select_Input}
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
        className={styles.Select_Input}
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
    <div className = {styles.File}>
      <input 
        className = {styles.File_Input}
        type = "file"
        id = "img"
        name = "img"
        value = {formData.img}
        onChange = {handleChange}
        required
      />
    </div>
    <div className = {styles.Button_Group}>
      <button className = {styles.Button} type="submit">Enviar</button>
      <button className = {styles.Button} type="button" onClick={handleBack}>Volver</button>
    </div>
  </div>
  </form>
</div>
  );
};

export default RegistroUsuario;
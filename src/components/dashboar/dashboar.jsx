import React from 'react';
import styles from './dashboar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faBook,faCaretDown,faCertificate} from '@fortawesome/free-solid-svg-icons';


const Dashboar = ()=>{
	return(
		<>
		<main className={styles.main}>

		<aside className={styles.barraLateral}>

          <div className={styles.menuLateral}>
          	<h3>Dashboar</h3>
          	<FontAwesomeIcon icon={faBars} />	
          </div>

          <div className={styles.menuLateral}>

          	<div>
          	    <FontAwesomeIcon  className={styles.icon} icon={faBook} />
          		<h4>Pensum</h4>	
                <FontAwesomeIcon  className={styles.icon} icon={faCaretDown} />
          	</div>

          	<div>
          	   <FontAwesomeIcon  className={styles.icon} icon={faCertificate } />
          		<h4>Constancia de estudio</h4>	
                <FontAwesomeIcon  className={styles.icon} icon={faCaretDown} />
          	</div>

          	<div>
          		<FontAwesomeIcon  className={styles.icon} icon={faCertificate} />
          		<h4>Constancia de notas</h4>	
                <FontAwesomeIcon  className={styles.icon} icon={faCaretDown} />
          	</div>

          	<div>
          		
          	</div>

          	<div>
          		
          	</div>

          	<div>
          		
          	</div>

          	<div>
          		
          	</div>
          	<div>
          		
          	</div>
          	<div>
          		
          	</div>
          	<div>
          		
          	</div>
          	<div>
          		
          	</div>
          	<div>
          		
          	</div>

          </div>

		</aside>

		<aside className={styles.barraLateral}>

		<div className={styles.barraLateralSection}>
			
		</div>	

		<div className={styles.barraLateralSection}>

		</div>

        </aside>
      
		</main>
		</>
		)
}

export default Dashboar;
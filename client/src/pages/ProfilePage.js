import React from 'react';

function ProfilePage(props) {
  return (
   <div>Your Book Collection
       <div>Borrowed books</div>
         <div class="card">
         <img class="card-img-top" src="https://media-exp1.licdn.com/dms/image/C4E0BAQHikN6EXPd23Q/company-logo_200_200/0/1595359131127?e=2159024400&v=beta&t=S5MNjBDjiH433VCWzjPeiopNDhxGwmfcMk4Zf1P_m_s" alt="Card image cap"></img>
           <div class="card-body">
             Example of borrowed book
           </div>
           
        </div>
       <div>Availale Books</div>
       <div class="card">
       <img class="card-img-top" src="https://media-exp1.licdn.com/dms/image/C4E0BAQHikN6EXPd23Q/company-logo_200_200/0/1595359131127?e=2159024400&v=beta&t=S5MNjBDjiH433VCWzjPeiopNDhxGwmfcMk4Zf1P_m_s" alt="Card image cap"></img>
           <div class="card-body">
             Example of available book
           </div>
           <button className="btn btn-primary" onClick="Lent">Lent?</button>
        </div>
       <div>Lent Books</div>
       <div class="card">
       <img class="card-img-top" src="https://media-exp1.licdn.com/dms/image/C4E0BAQHikN6EXPd23Q/company-logo_200_200/0/1595359131127?e=2159024400&v=beta&t=S5MNjBDjiH433VCWzjPeiopNDhxGwmfcMk4Zf1P_m_s" alt="Card image cap"></img>
           <div class="card-body">
             Example of lent out book
           </div>
           <button className="btn btn-primary" onClick="Received">Received?</button>
        </div>
   </div>
  );
}
// Card will be updated dynamically as books are uploaded, lent, and borrowed.

export default ProfilePage;
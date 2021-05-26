import React from 'react';
import ReactDOM from 'react-dom'
import { Profile } from "../components/Profile";
import { Book } from "../components/Book";
import Loading from '../components/Loading';
import auth from '../services/auth'
import Button from '../components/Button'

class ProfilePage extends React.Component {

  state = {
    loading: true,
    lendingBook: [],
    borrowingBook: [],
    availableBook: [],
    notFound: false,
    json: null,
  }

  componentDidMount() {
    if (auth.isAuthenticated != false){
      fetch('/api/user-book/my_vailable_books', { 
        method: 'POST',
        body: JSON.stringify({ userid: auth.user.id.toString() }),
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(res => res.json())
      .then(books => {
        this.setState({
          loading: false,
          availableBook: books.map((book,ii) => <Book {...book} key={ii} />),
        });
      })
      .catch(err => console.log("API ERROR: ", err));

      fetch('/api/user-book/my_lending', { 
        method: 'POST',
        body: JSON.stringify({ userid: auth.user.id.toString() }),
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(res => res.json())
      .then(books => {
        this.setState({
          loading: false,
          lendingBook: books.map((book,ii) => <Book {...book} key={ii} />),
        });
      })
      .catch(err => console.log("API ERROR: ", err));

      fetch('/api/user-book/my_borrowing', { 
        method: 'POST',
        body: JSON.stringify({ userid: auth.user.id.toString() }),
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(res => res.json())
      .then(books => {
        this.setState({
          loading: false,
          borrowing: books.map((book,ii) => <Book {...book} key={ii} />),
        });
      })
      .catch(err => console.log("API ERROR: ", err));
    }}


  setAvailable(value) {
    fetch('/api/user-book/set_available', { 
      method: 'POST',
      body: JSON.stringify({ id: auth.user.id.toString() , book_id: value}),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
      .catch(err => console.log("API ERROR: ", err));
  }

  setBorrower(value) {
    const enteredID = prompt('Please enter borrowers id')
    fetch('/api/user-book/set_borrower', { 
      method: 'POST',
      body: JSON.stringify({ borrower_id: enteredID , lender_id: auth.user.id.toString(), book_id: value}),
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(res => res.json())
      .catch(err => console.log("API ERROR: ", err));
  }

  render() {
    if (auth.isAuthenticated == false){
      return <div>
        <Profile name="Your Name" email="Your Email" school="Your School"/>
      </div>
    }
    let count = 0;
    let headlines = ["Books Available to Lend", "Books Lent Out", "Books Borrowed"];
    return (
      <section id="portfolio" class="portfolio">
      <div class="container">

        <div class="section-title">
          <h2>Profile</h2>
          {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
        </div>
      <div>
    <div>
    <div className="container-fluid text-center">
    <div className="row justify-content-center">  
      <Profile name={`${auth.user.firstName} ${auth.user.lastName}`} email={auth.user.email}  school={auth.user.school} 
    /></div></div></div>
    <br></br>
   <br></br>
   <div>
   <br></br>
   <br></br>
   <div>
          <div className="row justify-content-center">  
          Currently Lending:
          <br></br>         
          </div>
          <div className="row justify-content-center">  
         {this.state.lendingBook} 
         </div>
         <div className="row justify-content-center">  
         <br></br> 
          Currently Borrowing:
          <br></br> 
          </div> 
          <div className="row justify-content-center">         
         {this.state.borrowingBook} 
         </div>
         <div className="row justify-content-center">  
         <br></br> 
          Available Books:
          <br></br>  
          </div>   
          <div className="row justify-content-center">      
         {this.state.availableBook} 
           
            <br></br>
            <br></br>
          </div>
      </div>
     </div>
   </div>
   </div>
   </section>
    );
  }

}

// export function ProfilePage(props) {
//   return (
//     <div>
//    <div>Your Book Collection</div>
//    <div><Profile name="Michaela Friedman" email="123@123.com" school="QC"/></div>
//    <br></br>
//    <br></br>
//    <div><Book bookname="Michaela" email="123@123.com" school="QC" author="ME" isbn="12345678910"/></div>
//      console.log()
//        <div>Borrowed books</div>
//          <div class="card">
//          <img class="card-img-top" src="https://media-exp1.licdn.com/dms/image/C4E0BAQHikN6EXPd23Q/company-logo_200_200/0/1595359131127?e=2159024400&v=beta&t=S5MNjBDjiH433VCWzjPeiopNDhxGwmfcMk4Zf1P_m_s" alt="Card image cap"></img>
//            <div class="card-body">
//              Example of borrowed book
//            </div>
           
//         </div>
//        <div>Availale Books</div>
//        <div class="card">
//        <img class="card-img-top" src="https://media-exp1.licdn.com/dms/image/C4E0BAQHikN6EXPd23Q/company-logo_200_200/0/1595359131127?e=2159024400&v=beta&t=S5MNjBDjiH433VCWzjPeiopNDhxGwmfcMk4Zf1P_m_s" alt="Card image cap"></img>
//            <div class="card-body">
//              Example of available book
//            </div>
//            <button className="btn btn-primary" onClick="Lent">Lent?</button>
//         </div>
//        <div>Lent Books</div>
//        <div class="card">
//        <img class="card-img-top" src="https://media-exp1.licdn.com/dms/image/C4E0BAQHikN6EXPd23Q/company-logo_200_200/0/1595359131127?e=2159024400&v=beta&t=S5MNjBDjiH433VCWzjPeiopNDhxGwmfcMk4Zf1P_m_s" alt="Card image cap"></img>
//            <div class="card-body">
//              Example of lent out book
//            </div>
//            <button className="btn btn-primary" onClick="Received">Received?</button>
//         </div>
//         </div>
//   );
// }
// Card will be updated dynamically as books are uploaded, lent, and borrowed.

export default ProfilePage;
import { Link } from "react-router-dom"
import './data.css'
import { addDoc, setDoc, doc, getDocs, onSnapshot, deleteDoc,db,collection } from "./firebase"
import { useState,useEffect,useRef } from "react"
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// ////////////////////////////////

// import logo from './logo.svg';
import '../../App.css';
import Multiselect from 'multiselect-react-dropdown';
// import { useRef,useState,useEffect } from 'react';
import Select from 'react-select';
// import { addDoc, setDoc, doc, getDocs, onSnapshot, deleteDoc,db,collection } from "./components/config/firebase.js"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';
// import { Link } from 'react-router-dom';

// import { colourOptions } from './components/config/data';
const SaveUserData=async(name,sector,checkbox,idvalue) => {
  
  
  if( name && sector.length!==0 &&checkbox ){
    try {
    let sectorMap=sector.map((val)=>{return val.label})

    console.log(sectorMap.map((v)=>{console.log(v)}))
    let id;
    
    await setDoc(doc(db, "users-data", idvalue), {
      name: name,
      sector:sectorMap,
      id: idvalue

    });
    swal({
        title: "Saved",
        text: "Relod the page to see edited data",
        icon: "success",
      });
      
       
      
      

  }
    catch(e){
console.log("eerrr",e)
    }
  
  console.log(name,sector,checkbox)}
else{
  console.log("mising")
  swal({
    title: "Warning!",
    text: "please fill all the field",
    icon: "warning",
  });
} }

const Dropdown = ({idvalue}) => {
  let inputVal = useRef()
  let nameval = useRef()
  let checkVal = useRef()
  const [user, setUser] = useState([    { value: 'Furniture', label: 'Furniture', color: '#0052CC', isDisabled: true }])
  const [user2, setUser2] = useState([    { value: 'Plastic', label: 'Plastic and rugs', color: '#0052CC', isDisabled: true }])
  const [user3, setUser3] = useState([    { value: 'Machinery', label: 'Machinery', color: '#0052CC', isDisabled: true }])
  const [user4, setUser4] = useState([    { value: 'Manufacturing', label: 'Manufacturing', color: '#0052CC', isDisabled: true }])
  
  useEffect(() => {
    const getusers = async () => {
      let dbRef = collection(db, "furniture")
      let data = await getDocs(dbRef)
      // console.log(data.docs)
      let datamap = data.docs.map((val) => (
        { ...val.data() })
        )
        setUser([...user,...datamap])

        console.log("======>",datamap)

    }
    getusers()

    // //////////
    const getusers2 = async () => {
      let dbRef = collection(db, "Plastic and rugs")
      let data = await getDocs(dbRef)
      // console.log(data.docs)
      let datamap = data.docs.map((val) => (
        { ...val.data() })
      )
      setUser2([...user2,...datamap])

      console.log("======>",datamap)

    }
    getusers2()
    // ///////////////
    const getusers3 = async () => {
      let dbRef = collection(db, "machinery")
      let data = await getDocs(dbRef)
      // console.log(data.docs)
      let datamap = data.docs.map((val) => (
        { ...val.data() })
      )
      setUser3([...user3,...datamap])

      console.log("======>",datamap)

    }
    getusers3()
    // /////////////////

    const getusers4 = async () => {
      let dbRef = collection(db, "manufacturing")
      let data = await getDocs(dbRef)
      // console.log(data.docs)
      let datamap = data.docs.map((val) => (
        { ...val.data() })
      )
      setUser4([...user4,...datamap])

      console.log("======>",datamap)

    }
    getusers4()
    // /////////
    
  },[]
  )
  console.log("======>",user)
  console.log("======>",user2)
  console.log("======>",user3)
  console.log("======>",user4)
  const ColourOption = [...user,...user2,...user3,...user4
  ];


  return (
    <div className='sector-input'>
      <div className='name-input'>
      <br />
      <Form.Label htmlFor="basic-url">Your Name</Form.Label>
      <InputGroup className="mb-3">
      

        <Form.Control
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          placeholder='Name'
          ref={nameval}
        />
      </InputGroup>
      </div>
      <Form.Label htmlFor="basic-url">Sectors</Form.Label>
      <Select

        // defaultValue={[ColourOption[2], ColourOption[3]]}
        isMulti
        name="colors"
        options={ColourOption}
        className="basic-multi-select"
        classNamePrefix="select sector"
        ref={inputVal}
      />
     <Form className='mt-3'>
      {['checkbox'].map((type) => (
        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`default ${type}`}
            ref={checkVal}
          />
        </div>
      ))}
    </Form>
      <button className='btn btn-primary mt-3' onClick={()=>{SaveUserData(nameval.current.value,inputVal.current.getValue(),checkVal.current.checked,idvalue)}}>send </button>
   
    </div>
  )

}
  ;

function AppData({idvalue}) {

  return (<div>

    <div className='main-container main-container-edit'>
      
      <div className='sector-input'>
        <Dropdown idvalue={idvalue} />
      </div>
    </div>

  </div>
  );
} 

















// ////





const UserData = () => {
    const [live,setLive]=useState([])

    let dbRef = collection(db, "users-data")
    const [user, setUser] = useState([])
    useEffect(() => {
      const getusers = async () => {
        let data = await getDocs(dbRef)
        // console.log(data.docs)
        let datamap = data.docs.map((val) => (
          { ...val.data() })
        )
        setUser(datamap)
  
        // console.log("user======>",datamap)
  
      }
      getusers()
  
    },[]
  
    )
    console.log("user",user)
// ////////////////////////////////
function Example() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [editId, setEditId] = useState()
    let editedVal = useRef()
    const edit = (e) => {
  
      console.log(e.target.parentNode.parentNode.childNodes[1].id)
      setEditId(e.target.parentNode.parentNode.childNodes[1].id)
    }
    // const update = async (e) => {
    //   console.log("edited val", editedVal.current.value)
    //   console.log("edit id", editId)
    //   await setDoc(doc(db, "users", editId), {
    //     first: editedVal.current.value,
    //     iD: editId
  
    //   });
    // }
    return (
      <>
        <Button variant="primary" onClick={(e) => {
          handleShow()
          edit(e)
        }}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <AppData idvalue={editId}/>
          </Modal.Body>
          {/* <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => {
              handleClose()
              update()
            }}>
              Save Changes
            </Button>
          </Modal.Footer> */}
        </Modal>
      </>
    );
  }
  


// ///////////////////////////////////////////
    let print=user.map((v,i)=>{
    //     let sector= ...v.sector
    // console.log(...v.sector)
return    <div className="user-body-container" key={i}>
<div className="user-body-name">{v.name}</div>
<div className="user-body-sector" id={v.id}><span>{v.sector.toString()}</span>

<Example/>
</div>

</div>

})




    return (
        <div className="user-container">
            <button className="btn btn-danger m-3"><Link to={"/"}>Back</Link></button>
            <div className="user-head-body">
                <div className="user-head">
                    <div className="user-name"><h1>Name</h1></div>
                    <div className="user-sector"><h1>Sectors</h1></div>
                </div>
                <div className="user-body">
                {print}
                   

                  
                   
                </div>

            </div>

        </div>
    )

}

export { UserData }

// {/* <Link to={"/"}>Back</Link>  */}
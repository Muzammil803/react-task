import logo from './logo.svg';
import './App.css';
import Multiselect from 'multiselect-react-dropdown';
import { useRef,useState,useEffect } from 'react';
import Select from 'react-select';
import { addDoc, setDoc, doc, getDocs, onSnapshot, deleteDoc,db,collection } from "./components/config/firebase.js"
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';

// import { colourOptions } from './components/config/data';
const SaveUserData=async(name,sector,checkbox) => {
  
  
  if( name && sector.length!==0 &&checkbox ){
    try {
    let sectorMap=sector.map((val)=>{return val.label})

    console.log(sectorMap.map((v)=>{console.log(v)}))
    let id;
    const docRef = await addDoc(collection(db, "users-data"), {
      name: name,
      sector:sectorMap
      //   ide:id,
    });
    await setDoc(doc(db, "users-data", docRef.id), {
      name: name,
      sector:sectorMap,
      id: docRef.id

    });
    swal({
        title: "Saved",
        text: "you can read or edit your data by clicking on USER DATA",
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

const Dropdown = () => {
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
            label={`agree terms`}
            ref={checkVal}
          />
        </div>
      ))}
    </Form>
      <button className='btn btn-primary mt-3' onClick={()=>{SaveUserData(nameval.current.value,inputVal.current.getValue(),checkVal.current.checked)}}>send </button>
   
    </div>
  )

}
  ;

function AppData() {

  return (<div>

<p style={{color:"white",textAlign:'center'}}>Please enter your name and pick the Sectors you are currently involved in.
</p>
<button className='btn ' style={{backgroundColor:"white",margin:"10px 10px 10px"}}><Link style={{fontWeight:"bold",textDecoration:"none"}} to={"/user"}>UserData</Link></button>
    <div className='main-container'>
      
      <div className='sector-input'>
        <Dropdown />
      </div>
    </div>

  </div>
  );
} 

export default AppData;

# library-modal
a modal component for React application

# library-modal on NPM
You can see details of modal on NPM : [here](https://www.npmjs.com/package/library-modal)

# Install library-modal
On your terminal : 
`npm install library-modal`

# Use library-modal
- You must import package : `import { Modal } from 'library-modal'`
- How insert modal component at rendering (is an example) :
```js
import { Modal } from 'library-modal'

const Form = () => {

  const [firstname, setFirstname] = useState("")
  const [show, setShow] = useState(false)
  const [createOk, setCreateOk] = useState(false)

  const submitCreateEmployee = (e) => {
    if (firstname) {
      setCreateOk(false)
      setShow(true)
    } else {
      setCreateOk(true)
      setShow(true)
    }
  };
  
  const hide = () => {
    setShow(false)
  };
  
  return (
    <div className='Form'>
      <form action="" className='formulaire' name='form'>
        <label htmlFor="firstName">First Name</label>
        <input onChange={(e) => setFirstname(e.target.value)} type="text" id="firstName" required />
      </form>
      <button onClick={submitCreateEmployee} className='button-save'>Save</button>
      {show && !createOk && <Modal contentModal="You must complete all the fields!" hide={hide} />}
      {show && createOk && <Modal contentModal="Employee Created!" hide={hide} />}
    </div>
  )
};

export default Form;
```
You have to pass props `contentModal` and `hide` to component

# Props
- `contentModal` : text to display on modal
- `hide` : function called onClick update setShow on false


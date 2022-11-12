/* REUSED DYNAMIC FUNCTIONS FOR BOTH SHOW AND MOVIE COMPONENTS*/

// dynamic function to filter for ALL search bars, 
export function filterSearch(input, arr) {
    const filteredArr = arr.filter((obj) => 
    obj.title.toLowerCase().match(input.toLowerCase())
    )
    return filteredArr
  }
  
  // dynamic function to handle ALL form inputs
  export function handleFormInput(e, obj, setFunction) {
    setFunction(
      {...obj, [e.target.id]: e.target.value,}
    );
  }
  
  // dynamic function to handle submit for fetch calls to create/edit a show/movie obj-> 
  export function formSubmitHandle(e, obj, endpoint, navigateVar, fetchFunction, paramVar = false) {
    // submit button so prevent default
    e.preventDefault()
    // obj is state that holds object that is updated for each form input value typed in -> send obj in POST fetch -> and what is returned from POST fetch is the created media object, so then use id key in that new media object to navigate to that media's individual page

    // conditional if paramVar is true (diff between creating/editing new show/movie)
    const fetchData = !paramVar ? fetchFunction(endpoint, obj) : fetchFunction(endpoint, obj, paramVar)
    
    fetchData.then(resp => navigateVar(`/${endpoint}/${resp.id}`))
    .catch(err => console.log(err) )
  }
  
  //  function to convert endpoint strings
  export function convertEndpoint (string, firstUpperCase = false, singleUpperCase = false, singleLowerCase = false) {
    if(firstUpperCase){
      return `${string.slice(0,1).toUpperCase()}${string.slice(1).toLowerCase()}`
    }
    if(singleUpperCase){
      const upperPlural = `${string.slice(0,1).toUpperCase()}${string.slice(1).toLowerCase()}`
      return upperPlural.slice(0, upperPlural.length-1)
    }
    if(singleLowerCase){
      return string.slice(0, string.length-1).toLowerCase()
    }
  
  }
  
 
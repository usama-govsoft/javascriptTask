import React,{useState} from 'react'

function Filter(props) {

    const [imageValue,setImageValue] = useState();

   //download image
   const downloadImage=(src)=>{
    const img = new Image();
    img.crossOrigin = 'anonymous';  // This tells the browser to request cross-origin access when trying to download the image data.
    img.src = src;
    img.onload = () => {
      // create Canvas
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0);
      // create a tag
      const a = document.createElement('a');
      a.download = src;
      a.href = canvas.toDataURL('image/png');
      a.click();
    };
  }
  return (
    <div className="App">
        <h1>Enter only natural numbers</h1>
          <input
            type="text"
            pattern="[0-9]*"
            onChange={(event) => {
                if (isNaN(Number(event.target.value))) {
                    return setImageValue('');
                } else {
                    setImageValue(event.target.value);
                }
            }}
            maxLength={4}
            placeholder="Enter Natural Number"       
            value={imageValue}     
          />
      {
        props?.sum?.filter(i=>i.total == imageValue).map(i=>

            i.key !== null ?
            <div>  
                    <h4>Click on image for download</h4>
                    <img src={i.key} alt={i.total} style={{width:200}} onClick={()=>downloadImage(i.key)}/>
            </div>:
             <h4>Image Not Found</h4>
        )    
    }
        
    
    </div>
  );
}

export default Filter;

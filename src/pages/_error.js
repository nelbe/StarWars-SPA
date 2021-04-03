import DarthVader  from '../assets/img/darthVader.svg';

function Error({ statusCode }) {
    console.log(statusCode);
    return (
        <div className="w-full bg-stars min-h-full h-auto">
            <div className="justify-center items-center flex shadow-2xl"><DarthVader /></div>
            <div className="justify-center items-center flex">
                <p className="uppercase text-yellow-350 tracking-wider font-bold text-5xl">
                    {statusCode.status
                    ? `${statusCode.status} error`
                    : 'An error occurred on client'}
                </p>
            </div>
            <div className="justify-center items-center flex">
                <p className="uppercase text-yellow-350 tracking-wider font-bold text-2xl">
                    {statusCode.message ? statusCode.message : ''}
                </p>        
            </div>
        </div>
     
    )
  }
  
export default Error
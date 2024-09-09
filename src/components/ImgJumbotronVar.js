import Logo1 from "../img/parfum-jumbotron1.jpg"
import Logo2 from "../img/parfum-jumbotron2.jpg"
import Logo3 from "../img/parfum-jumbotron3.jpg"
import Logo4 from "../img/parfum-jumbotron4.jpg"
import Logo5 from "../img/parfum-jumbotron5.jpg"

const ImgJumbotronVar = () => {
    const logoAll = [Logo1, Logo2, Logo3, Logo4, Logo5];
    
    return (
        <div className="grid grid-flow-col-dense gap-0 place-items-center w-fit place-content-end">
            {logoAll.map((image, index) => (
            <div
                key={index}
                className={`w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white relative ${
                    index !== 0 ? "-ml-8" : ""
                  }`}
            >
                <img
                src={image}
                alt={`Image ${index + 1}`}
                className="w-full h-full object-cover"
                />
            </div>
            ))}
        </div>
    )
}

export default ImgJumbotronVar;
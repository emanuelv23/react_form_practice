import React, {Fragment} from "react";

const Domicilio = ({domicilio, setDomicilio}) => {
    const handleChange = (e) => {
        setDomicilio({
            ...domicilio,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <Fragment>
            <label>Calle</label>
            <input type="text" name="calle" value={domicilio.calle} onChange={handleChange}/>
            <label>Número</label>
            <input type="text" name="numero" value={domicilio.numero} onChange={handleChange}/>
        </Fragment>
    );
};

export default Domicilio;
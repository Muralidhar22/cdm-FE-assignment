const ToggleSwitch = ({ name, onChangeHandler, data }: { name: string, onChangeHandler: (e:React.ChangeEvent<HTMLInputElement>, value?: boolean | string) => void, data: boolean }) => {
    return(
        <label className="switch">
            <input onChange={(e) => onChangeHandler(e, !data)} name={name} checked={data} type="checkbox" />
            <span className="slider"></span>
            <style jsx>{`
                .switch {
                    position: relative;
                    display: inline-block;
                    width: 55px;
                    height: 30px;
                  }
                  
                  .switch input { 
                    opacity: 0;
                    width: 0;
                    height: 0;
                  }
                  
                  .slider {
                    position: absolute;
                    cursor: pointer;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: #ccc;
                    -webkit-transition: .4s;
                    transition: .4s;
                    border-radius: 34px;
                  }
                  
                  .slider:before {
                    position: absolute;
                    content: "";
                    height: 22px;
                    width: 22px;
                    left: 4px;
                    bottom: 4px;
                    background-color: white;
                    -webkit-transition: .4s;
                    border-radius: 50%;
                    transition: .4s;
                  }
                  
                  input:checked + .slider {
                    background-color: #4F46E5;
                  }
                  
                  input:focus + .slider {
                    box-shadow: 0 0 1px #4F46E5;
                  }
                  
                  input:checked + .slider:before {
                    -webkit-transform: translateX(26px);
                    -ms-transform: translateX(26px);
                    transform: translateX(26px);
                  }
            
            `}</style>
        </label>
    )
}

export default ToggleSwitch;
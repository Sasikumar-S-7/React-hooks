
import { useCount } from "../Custom Hooks/useCount";

export const CustomHook3 = () => {
  
    const [Counting,count] = useCount();

    return (
        <>
            <div className="row justify-content-center my-5">
                <div className=" col-md-6 bg-secondary shadow-lg pt-2 pb-2 pe-4 ps-4 rounded-4">
                    <h2>Custom Hook</h2>
                    <button className="btn btn-warning" onClick={Counting}>counting</button>
                    <h4>Count: {count * 10}</h4>
                </div>
            </div>
        </>
    );
};

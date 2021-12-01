import axios, { AxiosError } from "axios";
import { useState } from "react";
import type { Method } from "axios";

interface IRequest {
  url: string;
  method: Method;
  data?: object;
  onSuccess?: Function;
}

// export const useRequest = ({ url, method, data, onSuccess }: IRequest) => {
//   const [errors, setErrors] = useState(<></>);

//   const doRequest = async () => {
//     try {
//       setErrors(<></>);
//       const response = await axios.request({
//         url,
//         method,
//         data,
//       });

//       if (onSuccess) {
//         onSuccess(response.data);
//       }
//     } catch (err) {
//       const error = err as AxiosError;

//       setErrors(<div className="text-red-500">
//         <h3>Error:</h3>
//         <ul>{error.response!.data.errors.map((err) => ())}</ul>
//       </div>);
//     }
//   };

//   return <div className="text-red-500">
//     Error
//   </div>;
// };

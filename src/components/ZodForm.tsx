
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm,  type FieldValues } from "react-hook-form"
// import {z} from "zod"

// // const schema = z.object({
// //     name:z.string().min(3,{message:"Name must be at least 3 character"}),
// //     age:z.number({invalid_type_error:"Age field is required"}).min(18),
// // })


// const schema = z.object({
//   name: z.string().min(3, { message: "Name must be at least 3 character" }),
//   age: z
//     .number()
//     .min(18, { message: "Age must be at greater than 18" }),
// })

// type FormData = z.infer<typeof schema>

// const ZodForm = () => {
//     const { register, handleSubmit, formState: { errors,isValid } }
//      = useForm<FormData>({resolver:zodResolver(schema)});

//     console.log(errors.name);
//       console.log(errors.age);

//     const onSubmit = (data: FieldValues) => console.log(data);
//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <div className='mb-3'>
//                 <label htmlFor="name">Name</label>
//                 <input
//                     {...register("name")}
//                     id="name"
//                     type="text" />
//             </div>

          
//             {errors.name && <p className="text-danger">{errors.name.message}</p>}
            


//             <div className='mb-3'>
//                 <label htmlFor="age">Age</label>
//                 <input
//                     {...register("age",{valueAsNumber:true})}
//                     id="age"
//                     type="number" />
//             </div>
//              {errors.age && <p className="text-danger">{errors.age.message}</p>}
            

//             <button
//                 disabled={!isValid}
//                 type='submit'
//                 className='btn btn-primary'>Submit</button>


//         </form>
//     )
// }

// export default ZodForm
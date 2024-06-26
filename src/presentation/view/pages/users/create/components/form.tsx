import { useForm, SubmitHandler } from "react-hook-form"

type Props = {
  submit: any
}

type Inputs = {
  name: string
  email: string
}

export const Form = ({ submit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    await submit(data)
    reset()
  }

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="">Nome</label>
          <input {...register('name')} />
        </div>
        <div>
          <label>Email</label>
          <input {...register('email', { required: true })} />
          {errors.email && <span>This field is required</span>}
        </div>
        <div>
          <input type='submit' />
        </div>
      </form>
  )
}

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

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    submit(data)
    reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register('name')} />
        <input {...register('email', { required: true })} />
        {errors.email && <span>This field is required</span>}

        <input type='submit' />
      </form>
    </>
  )
}

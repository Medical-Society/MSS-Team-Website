interface IProps {
    text: string;
    isLoading: boolean;
}

const Button = ({text, isLoading}: IProps) => {
  return (
    <button className='bg-primary text-white w-full rounded-3xl p-2' type='submit' disabled={isLoading}>
      {isLoading ? 'Loading...' : text}
    </button>
  )
}

export default Button
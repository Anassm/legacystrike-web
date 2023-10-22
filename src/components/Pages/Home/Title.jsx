import logo from "../../../assets/static/images/logo.png";

const Title = () => {
    const size = 200;
    return (
    <div className="flex flex-col items-center justify-center gap-5">
        <img src={logo} width={size} height={size} />
        <h1 className="text-3xl text-white">Legacy Strike</h1>
        <h1 className="text-2xl text-white">THE WAY CSGO IS MEANT TO BE PLAYED</h1>
    </div>
    )
}
export default Title;
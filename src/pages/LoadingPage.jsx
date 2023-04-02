import logo from "../assets/logo.png";

export default function LoadingPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black-900 text-white/90">
      <div className="bg"></div>
      <div className="flex flex-col items-center fade-in-onload">
        <img src={logo} className="w-32" alt="logo"/>
        <h1 className="title">Keanu Reaño</h1>
      </div>
    </div>
  );
}

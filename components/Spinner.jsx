export default function Spinner() {
    // animation effect while waiting for rendering
    return (
      <span className="h-screen w-screen flex justify-center items-center">
        <span className="animate-ping relative flex h-10 w-10  rounded-full bg-black opacity-75"></span>
      </span>
    );
  }
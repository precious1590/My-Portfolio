
export default function Footer() {
  return (
    <footer className="bg-pink-900 text-white py-10 px-4 font-poppins">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 text-center sm:text-left">
        
      
        <div>
          <h2 className="text-2xl font-bold">Komolafe Precious</h2>
          <p className="text-sm mt-1">Frontend Developer • Passionate Creator</p>
        </div>

     
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#Welcome" className="hover:underline">Home</a>
          <a href="#About" className="hover:underline">About</a>
          <a href="#Project" className="hover:underline">Projects</a>
        </div>

     
        <div className="text-sm">
          <p>Email: <a href="mailto:komolafeprecious12@gmail.com" className="underline">komolafeprecious12@gmail.com</a></p>
          <p>© {new Date().getFullYear()} All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

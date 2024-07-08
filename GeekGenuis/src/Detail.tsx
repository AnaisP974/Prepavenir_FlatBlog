const Detail = () => {
    return (<>
    <div>Detail</div>
    <section className="relative pt-12 bg-blueGray-50">
<div className="flex flex-wrap items-center">
  <div className="w-full px-4 ml-auto mr-auto md:w-4/12">
    <img alt="..." className="max-w-full rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80"/>
  </div>
  <div className="w-full px-4 ml-auto mr-auto md:w-5/12">
    <div className="md:pr-12">
      <div className="inline-flex items-center justify-center w-16 h-16 p-3 mt-8 mb-6 text-center text-pink-600 bg-pink-300 rounded-full shadow-lg">
        <i className="text-xl fas fa-rocket"></i>
      </div>
      <h3 className="text-3xl font-semibold">A growing company</h3>
      <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
        The extension comes with three pre-built pages to help you get
        started faster. You can change the text and images and you're
        good to go.
      </p>
      <ul className="mt-6 list-none">
        <li className="py-2">
          <div className="flex items-center">
            <div>
              <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold text-pink-600 uppercase bg-pink-200 rounded-full"><i className="fas fa-fingerprint"></i></span>
            </div>
            <div>
              <h4 className="text-blueGray-500">
                Carefully crafted components
              </h4>
            </div>
          </div>
        </li>
        <li className="py-2">
          <div className="flex items-center">
            <div>
              <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold text-pink-600 uppercase bg-pink-200 rounded-full"><i className="fab fa-html5"></i></span>
            </div>
            <div>
              <h4 className="text-blueGray-500">Amazing page examples</h4>
            </div>
          </div>
        </li>
        <li className="py-2">
          <div className="flex items-center">
            <div>
              <span className="inline-block px-2 py-1 mr-3 text-xs font-semibold text-pink-600 uppercase bg-pink-200 rounded-full"><i className="far fa-paper-plane"></i></span>
            </div>
            <div>
              <h4 className="text-blueGray-500">Dynamic components</h4>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
<footer className="relative pt-8 pb-6 mt-8">
  <div className="container px-4 mx-auto">
    <div className="flex flex-wrap items-center justify-center md:justify-between">
      <div className="w-full px-4 mx-auto text-center md:w-6/12">
        <div className="py-1 text-sm font-semibold text-blueGray-500">
          Made with <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank">Notus JS</a> by <a href="https://www.creative-tim.com" className="text-blueGray-500 hover:text-blueGray-800" target="_blank"> Creative Tim</a>.
        </div>
      </div>
    </div>
  </div>
</footer>
</section>
</> )
}

export default Detail
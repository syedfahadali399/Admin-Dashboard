function AnnoucementSection() {
  return (
    <>
<div className="bg-linear-to-r from-red-500 via-purple-400 to-blue-500 mt-16">
  <div className="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
    <div className="grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2">
      <div className="text-center md:text-start">
        <p className="text-xs text-white/80 uppercase">
          Preview of Preline
        </p>
        <p className="mt-1 text-white font-medium">
          Sign up to get unlimited updates. No credit card required.
        </p>
      </div>

      <div className="mt-3 text-center md:text-start md:flex md:justify-end md:items-center">
        <a className="py-2 px-3 md:py-3 md:px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-full border border-gray-200 bg-white text-gray-800 shadow-2xs hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800" href="#">
          Sign up free
        </a>
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default AnnoucementSection
const Header = (): JSX.Element => {
  return (
    <>
      <h1 className="text-4xl font-thin">
        <span className="font-mono">Weather</span>{' '}
        <span className="font-black">Forecast</span>
      </h1>
      <p className="mt-2 font-mono font-thin">
        Enter a location below to search for weather in your location
      </p>
    </>
  )
}

export default Header

import './styles.css';

export default function Header({ changeSelectedTimeZone }) {
  return (
    <header>
      <h1>Choose a Time Zone</h1>
      <div>
        <button onClick={() => changeSelectedTimeZone('utc')}>
          Coordinated Universal Time
        </button>
        <button onClick={() => changeSelectedTimeZone('est')} id="button2">
          Eastern Standard Time
        </button>
      </div>
    </header>
  )
}
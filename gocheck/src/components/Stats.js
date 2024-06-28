function Stats({ items }) {
  if (items.length === 0) {
    return (
      <footer className="stats">
        <span>Yuk share apa yang kamu lakukan hari ini 😊</span>
      </footer>
    );
  }
  const totalItems = items.length;
  const doneItems = items.filter((item) => item.done).length;
  const percentage = Math.round((doneItems / totalItems) * 100);
  return (
    <footer className="stats">
      <span>
        {percentage === 100
          ? "✅ Kamu sudah melakukan semuanya"
          : `Kamu punya ${totalItems} catatan dan baru ${doneItems} yg di checklist(${percentage}%)`}
      </span>
    </footer>
  );
}

export default Stats;

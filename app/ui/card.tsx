export default function Card() {
  return (
    <div className="mx-4 bg-gray-300 rounded-md overflow-hidden shadow-md">
      <div className="p-4">
        <div>
        <h2 className="text-xl text-black font-bold mb-2">Card Title</h2>
        {/* <FontAwesomeIcon icon="fa-solid fa-check" /> */}
        </div>

        <p className="text-black text-sm bg-gray-100 rounded-md p-2">
          This is a brief summary or description of the card content. It can
          include important information or details about the topic.
        </p>
      </div>
    </div>
  );
}

export default function Field(props: {
  id: number;
  label: string;
  type: string;
}) {
  if (props.type == "sumbit") {
    return <Button {...props} />;
  } else {
    return <RegularInput {...props} />;
  }
}

/* Regular Input */
function RegularInput(props: {
  label: string;
  type: string;
}) {
  return (
    <>
      <label>{props.label}</label>
      <input
        className="border-2 border-gray-200 rounded-lg p-2 m-2 w-full"
        type={props.type}
      />
    </>
  );
}

/* If the input type is button then */
function Button(props: {
  type: string;
  label: string;
}) {
  return (
    <button
      type="submit"
      className="h-10 bg-blue-800 rounded-lg p-2 text-white font-bold mt-2"
    >
      {props.label}
    </button>
  );
}

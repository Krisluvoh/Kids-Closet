export default function FormError({state}) {
  return (
    <>
        {state && (
            <div className="error">
                {state}
            </div>
        )}
    </>
  )
}
type Params = {
    params: Promise<{
        id: String
    }>
}

export default async function page({ params } : Params) {
    console.log(params)
    const { id } = await params
  return (
    <div>
        ブログID: {id}
    </div>
  )
}

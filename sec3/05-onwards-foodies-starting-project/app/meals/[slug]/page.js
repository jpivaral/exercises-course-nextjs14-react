export default function MealDetailsPage({params}) {
    return (
        <main>
            <h1>Meals</h1>
            <p>{params.slug}</p>
        </main>
    );
}
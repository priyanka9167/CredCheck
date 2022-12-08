import { useRouter } from "next/router";
export default function ExpenditurePage() {
    const router = useRouter();
    const cardId: String = router.query.id;

    return (
        <div className = "container">
            Hello World! {cardId}
        </div>
    )
}
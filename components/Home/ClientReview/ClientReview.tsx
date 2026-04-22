'use client';
import SectionHeading from "@/components/Helper/SectionHeading";
import { userReviewData } from "@/data";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ReviewCard from "./ReviewCard";

export default function ClientReview() {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 3000, min: 1324 },
            items: 3
        },
        desktop: {
            breakpoint: { max: 1324, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 764, min: 0 },
            items: 1
        }
    };

    return (
        <div className="py-20 bg-gray-100 dark:bg-gray-900">
            <div className="w-[80%] mx-auto">
                <SectionHeading
                    title_1="Our Client"
                    title_2="Review"
                    description="Checkout our client reviews"
                />
            </div>
            <div className="mt-14">
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    arrows={true}
                >
                    {userReviewData.map((user) => {
                        return <div key={user.id}>
                            <ReviewCard user={user} />
                        </div>
                    })}
                </Carousel>
            </div>
        </div>
    );
}
import HeroSection from "./HeroSection";
import FeaturedProductsSection from "./FeaturedProductsSection";
import {FlexColumn, SpinnerContainer} from "../../../App.Styles";
import TopRatedProductSection from "./TopRatedProductSection";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getFeaturedProducts, getSliderImages} from "../../../Redux/Guest/guestActions";

const HomePage = () => {
    const dispatch = useDispatch();
    const state = useSelector((store) => store);

    useEffect(() => {
        dispatch(getSliderImages());
        dispatch(getFeaturedProducts());
    }, [dispatch]);

    console.log('state.guestState.', state.guestState.sliderImage)
    return state.guestState.isLoading ? (
        <SpinnerContainer/>) :
        (
        <FlexColumn>
            <HeroSection sliderProducts={state.guestState.sliderImage || []}/>
            <FeaturedProductsSection products={state.guestState.products.products || []}/>
            <TopRatedProductSection topRatedProducts={state.guestState.sliderImage || []}/>
    </FlexColumn>
    );
}

export default HomePage;
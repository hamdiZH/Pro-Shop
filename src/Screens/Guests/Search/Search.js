import React, {useEffect, useState} from 'react';
import {FlexBox, FlexColumn, InnerSection, LoadMore, SpinnerContainer, Typography} from "../../../App.Styles";
import {Divider} from "../HomeScreen/HomePage.Styles";
import ProductCard from "../../../Components/ProductCard/ProductCard";
import {useDispatch, useSelector} from "react-redux";
import {useLocationWithQuery} from "react-router-query-hooks";
import {search} from "../../../Redux/Guest/guestActions";
import {ErrorMessage} from "../../Auth/Auth.Styles";
import {CardsBox} from "../ProductScreen/ProductScreen.Styles";

function Search(props) {
    const {
        guestState: {
            searchResults: {isLoading, error, products, pages},
        },
    } = useSelector(store => store);

    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const locationQuery = useLocationWithQuery();
    const {
        query: {keyword},
    } = locationQuery;

    useEffect(() => {
        dispatch(search(keyword, page));
    }, [dispatch, keyword, page]);

    return isLoading && page === 1 ? (
        <SpinnerContainer/>) : error ? (
        <ErrorMessage>{error}</ErrorMessage>) : (
        <FlexBox color={'#F7F8FC'}>
            <InnerSection style={{marginTop: 62}}>
                <FlexColumn>
                    <Typography fontSize={32} color={'#242424'} fontWeight={700} style={{marginBottom: 22}}>Search
                        Results ...
                    </Typography>
                    <Divider dividerWidth={200} dividerHeight={7} isYellow={true}/>
                    <Divider dividerWidth={1640} dividerHeight={2} isYellow={false}/>
                </FlexColumn>


                {/*<FlexColumn style={{margin: 43, alignItems: 'start', justifyContent: 'start'}}>*/}
                    <CardsBox>
                    {products.length > 0 ? (
                        products.map((item) => (
                            <ProductCard
                                product={item}
                                key={item._id}
                                id={item._id}
                                image={"https://proshop-ms.herokuapp.com/" + item.image}
                                text={item.name}
                                // discount={0}
                                price={item.price}
                                rate={item.rating}
                            />

                        ))
                    ) : (
                        <Typography style={{ justifyContent: "start", marginTop: 60 }} fontSize="20" color="#242424" fontWeight="500">
                            No Results...
                        </Typography>
                    )}

                    {pages > 1 && page < pages && (
                        <LoadMore isLoading={isLoading} onClick={() => setPage((prevPage) => prevPage + 1)}>
                            Load More
                        </LoadMore>
                    )}
                    </CardsBox>
                {/*</FlexColumn>*/}
            </InnerSection>
        </FlexBox>
    );
}

export default Search;
import React, { Component } from 'react';
import { Card } from 'reactstrap';
import Select from 'react-select';
import { Header } from './HeaderView';
import FilteredResultsView from './FilteredResultsView';

// form for users to enter in their filters 
// required prop: GoController
class FindAMealView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            filtered: false,
        }
    }

    // displays upload form
    render() {
        let mealOptions = [
            { value: 'breakfast', label: 'Breakfast'},
            { value: 'lunch', label: 'Lunch'},
            { value: 'dinner', label: 'Dinner'},
            { value: 'snack', label: 'Snack'},
            { value: 'any', label: 'Any'},
        ];

        let peopleServed = [
            { value: 'women', label: 'Women'},
            { value: 'men', label: 'Men'},
            { value: 'children', label: 'Children'},
            { value: 'd', label: 'D'},
            { value: 'e', label: 'E'},
        ]

        let dayServed = [
            { value: 'sunday', label: 'Sunday'},
            { value: 'monday', label: 'Monday'},
            { value: 'tuesday', label: 'Tuesday'},
            { value: 'wednesday', label: 'Wednesday'},
            { value: 'thursday', label: 'Thursday'},
            { value: 'friday', label: 'Friday'},
            { value: 'saturday', label: 'Saturday'},
        ]

        // let filteredResults = this.props.results;
        let filteredResults = [
            { 
                "properties": {
                    "Day": [
                        "Monday",
                        "Tuesday"
                    ],
                    "Time_Start": "6:15AM",
                    "Time_End": "7:00AM",
                    "Meal_Served": ["Breakfast"],
                    "Age_Served": "All",
                    "Gender_Served": "All",
                    "People_Served": "Open to all",
                    "Location": "2515 Western Ave., Seattle",
                    "Name_of_Program": "Millionair Club Charity"
                },
                "geometry": {
                    "Type": "Point",
                    "coordinates": [
                        47.610471,
                        -122.35034099999
                    ]
                },
            },
            {
                "properties": {
                    "Day": [
                        "Monday",
                        "Tuesday"
                    ],
                    "Time_Start": "6:15AM",
                    "Time_End": "9234",
                    "Meal_Served": ["Breakfast"],
                    "Age_Served": "All",
                    "Gender_Served": "All",
                    "People_Served": "Open to all",
                    "Location": "2515 Western Ave., Seattle",
                    "Name_of_Program": "Millionair Club Charity"
                },
                "geometry": {
                    "Type": "Point",
                    "coordinates": [
                        47.610471,
                        -122.35034099999
                    ]
                },
            }
        ];

        let main = null; 

        if (this.state.filtered == false) {
            main = (
                <div className="filter-form col-sm-4"> 
                    <form className="test"> 
                        <p align="center">find the right program for you</p>
                        <hr></hr>
                        <div className="form-group">
                            <input className="form-control" type="text"  id="zipcode" placeholder="search by zip code..."/>
                        </div>
                        <div className="form-group">
                            <input className="form-control" type="text"  id="name" placeholder="search by name..."/>
                        </div>
                        <div className="form-group">
                            <Select
                                isMulti
                                name="meals"
                                options={mealOptions}
                                closeMenuOnSelect={false}
                                hideSelectedOptions={false}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                placeholder="meal served"
                            />
                        </div>
                        <div className="form-group">
                            <Select
                                isMulti
                                name="meals"
                                options={peopleServed}
                                closeMenuOnSelect={false}
                                hideSelectedOptions={false}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                placeholder="people served"
                                closeMenuOnSelect={false}
                            />
                        </div>
                        <div className="form-group">
                            <Select
                                isMulti
                                name="meals"
                                options={dayServed}
                                closeMenuOnSelect={false}
                                hideSelectedOptions={false}
                                className="basic-multi-select"
                                classNamePrefix="select"
                                placeholder="day served"
                            />
                        </div>
                        <div className="row justify-content-center">
                            <button type="submit" className="go-button">go</button>
                        </div>
                    </form>
                </div>
            )
        } else {
            main = (
                <div className="form-group my-cards">
                    <div className="card-container">
                        {filteredResults.map((card, i) => {
                            return (
                                <Card>
                                    <p>{filteredResults[i].properties["Name_of_Program"]}</p>
                                    <p>{filteredResults[i].properties["People_Served"]}</p>
                                    <p>{filteredResults[i].properties["Meal_Served"]}</p>
                                    <p>{filteredResults[i].properties["Time_Start"]}-{filteredResults[i].properties["Time_End"]}</p>
                                    <p>{filteredResults[i].properties["Day"]}</p>
                                    <p>{filteredResults[i].properties["Location"]}</p>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            )
        }

        return (
            <div>
                <Header/>
                {main}
            </div>
        )
    }

    // takes in filter options and sends it back to the server to apply filters to the data
    // this will be done in the GoController
    onSubmit = event => {
        // call GoController
    }

}



export default FindAMealView;
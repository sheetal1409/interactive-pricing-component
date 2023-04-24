import React from "react";

export function Card() {
    const [range, setRange] = React.useState("100")
    const [amount, setAmount] = React.useState("10")
    const [yearlyAmount, setYearlyAmount] = React.useState()
    const [displayYearly, setDisplayYearly] = React.useState("false")


    React.useEffect(() => {
        return setAmount((amount) => amount = range / 10)
    }, [range])

    React.useEffect(() => {
        setYearlyAmount((yearlyAmount) => amount * 12 * 0.75)
    }, [amount])

    function handleBilling() {
        console.log("clicked")
        setDisplayYearly((displayYearly) => displayYearly ? false : true)
    }
    const MAX = 200;
    const getBackgroundSize = () => {
        return {
            backgroundSize: `${(range * 100) / MAX}% 100%`,
        };
    };

    return (
        <div className="card">
            <section className="card-pricing-range">


                <div className="package-rate"><div className="package">{range ? range : ""}K PAGEVIEWS</div>
                    <div className="rate-type"> <div className="rate"> {displayYearly ? `$${amount ? amount : ""}` : `$${yearlyAmount ? yearlyAmount : ""}`}
                        <span className="rate-span" >{displayYearly ? "/month" : "/year"}</span> </div>
                    </div>
                </div>

                <div className="range-slider">
                    <input type="range" className="slider" value={range} step="10" min="0" max="200" onChange={(e) => setRange(e.target.value)} style={getBackgroundSize()} />
                </div>

                <div className="mobile-rate-type"> <div className="rate"> {displayYearly ? `$${amount ? amount : ""}` : `$${yearlyAmount ? yearlyAmount : ""}`}
                    <span className="rate-span" >{displayYearly ? "/month" : "/year"}</span> </div>
                </div>
                <div className="billing-box">
                    <div className="billing-type">Monthly Billing</div>
                    <div className="toggle-btn" >
                        <input type="checkbox" id="toggle-btn-1" />
                        <label for="toggle-btn-1" onClick={handleBilling}></label>
                    </div>
                    <div className="billing-type">Yearly Billing <span className="discount">25% discount</span>
                        <span className="mobile-discount">-25%</span></div>
                </div>
            </section >
            <section className="card-price-plan">
                <div className="plans">
                    <div className="plan-type">
                        <img src=".//icon-check.svg" alt="checkicon" />
                        <p>Unlimited Websites</p>
                    </div>
                    <div className="plan-type">
                        <img src=".//icon-check.svg" alt="checkicon" />
                        <p>100% Data ownership</p>
                    </div>
                    <div className="plan-type">
                        <img src=".//icon-check.svg" alt="checkicon" />
                        <p>Email reports</p>
                    </div>
                </div>
                <button>Start my trail</button>
            </section>
        </div >
    )
}
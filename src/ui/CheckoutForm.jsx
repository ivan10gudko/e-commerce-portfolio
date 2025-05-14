import Button from "./Button";
import Checkbox from "./Checkbox";
import CountrySelect from "./ContrySelect";
import Fieldset from "./Fieldset";
import Input from "./Input";

function CheckoutForm() {
    return ( 
        <form>
            <Fieldset title="Contact">
                <Input name="email" type="email" required >Email</Input>
                <Checkbox name="email-news-subscription" checked>Email me with news and offers</Checkbox>
            </Fieldset>
            <Fieldset title="Dilivery">
            <div className="grid grid-cols-2 gap-4">
                <Input name="firstname">First name(optional)</Input>
                <Input name="lastname" required>Last name</Input>
            </div>
            <CountrySelect/>
            <Input name="company" required>Company (optional)</Input>
            <Input name="address" required>Address</Input>
            <Input name="apartment">Apartment, suite, etc. (optional)</Input>
            <div className="grid grid-cols-2 gap-4">
                <Input name="city" required>City</Input>
                <Input name="postal-code" required>Postal code</Input>
            </div>
            <Input name="phone" required>Phone</Input>
            <Checkbox name="save-form-data">Save this information for next time</Checkbox>
            <Checkbox name="news-subscription">Text me with news and offers</Checkbox>
            </Fieldset>
            <Button type="fill" bgColor="black" color="white" className="w-full py-4 text-xl font-semibold">Pay now</Button>
        </form>
    );
}

export default CheckoutForm;
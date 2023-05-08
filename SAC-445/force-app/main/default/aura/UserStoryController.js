<aura:component>
    <ltng:require scripts="{!$Resource.LWCScript}" afterScriptsLoaded="{!c.afterScriptsLoaded}" />
    <aura:handler name="init" value="{!this}" action="{!c.doInit}" />
    
    <aura:attribute name="fileName" type="String" />
    <aura:attribute name="className" type="String" />
    <aura:attribute name="dependencyClasses" type="Object" />
    
    <div class="slds-grid">
        <div class="slds-col slds-size_1-of-1">
            <div class="slds-box">
                <div class="slds-form-element">
                    <div class="slds-form-element__control">
                        <lightning:input type="text" name="fileName" label="File Name" value="{!v.fileName}" onchange="{!c.generateDependencyClasses}" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="slds-grid">
        <div class="slds-col slds-size_1-of-1">
            <div class="slds-box">
                <div class="slds-form-element">
                    <div class="slds-form-element__control">
                        <lightning:input type="text" name="className" label="Class Name" value="{!v.className}" onchange="{!c.generateDependencyClasses}" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="slds-grid">
        <div class="slds-col slds-size_1-of-1">
            <div class="slds-box">
                <div class="slds-form-element">
                    <div class="slds-form-element__control">
                        <lightning:textarea name="dependencyClasses" label="Dependency Classes" value="{!v.dependencyClasses}" readonly="true" disabled="true" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</aura:component>

({
    afterScriptsLoaded : function(component, event, helper) {
        //after the scripts are loaded successfully, call the init method
        this.doInit(component, event, helper);
    },
    doInit : function(component, event, helper) {
        //initialize the component
        helper.generateDependencyClasses(component);
    },
    generateDependencyClasses : function(component, event, helper) {
        //generate the dependency classes
        helper.generateDependencyClasses(component);
    }
})